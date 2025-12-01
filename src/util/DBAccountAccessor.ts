import { Connection, Request } from "tedious";
import { dbConfig } from "../lib/config/dbConfig";
import { Account } from "../lib/model/database/account";

export class DBAccountAccessor {
    /**
     * accountテーブルの全件をAccount型で取得
     */
    static async selectAll(): Promise<Account[]> {
        console.log("DBAccountAccessor.selectAll called");

        return new Promise((resolve, reject) => {
            const connection = new Connection(dbConfig);
            const results: Account[] = [];

            const cleanupAndReject = (err: any) => {
                try {
                    connection.close();
                } catch (_) { }
                reject(err);
            };

            connection.on("connect", (err: any) => {
                if (err) {
                    return cleanupAndReject(
                        new Error(`SQL Server Connect error: ${err}`)
                    );
                }

                const request = new Request(
                    `SELECT * FROM [account]`,
                    (reqErr: any) => {
                        if (reqErr) {
                            return cleanupAndReject(reqErr);
                        }
                    }
                );

                request.on("row", (columns: any[]) => {
                    const row: any = {};
                    columns.forEach((column: any) => {
                        const colName = column?.metadata?.colName as string | undefined;
                        if (colName) row[colName] = column.value;
                    });
                    try {
                        results.push(new Account(row));
                    } catch (e) {
                        // 型変換エラー時はスキップまたはエラー処理
                    }
                });

                request.on("requestCompleted", () => {
                    try {
                        connection.close();
                    } catch (_) { }
                    resolve(results);
                });

                connection.execSql(request);
            });

            connection.on("error", (err: any) => {
                cleanupAndReject(err);
            });

            connection.connect();
        });
    }
}
