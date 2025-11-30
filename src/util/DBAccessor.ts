import { Connection, Request } from "tedious";
import { dbConfig } from "../lib/config/dbConfig";

export class DBAccessor {
  /**
   * 指定したテーブルの全件を取得するサンプルメソッド
   * @param tableName 取得したいテーブル名
   */
  static async selectAll(
    tableName: string
  ): Promise<Record<string, unknown>[]> {
    console.log("selectAll called");

    return new Promise((resolve, reject) => {
      const connection = new Connection(dbConfig);
      const results: Record<string, unknown>[] = [];

      const cleanupAndReject = (err: any) => {
        try {
          connection.close();
        } catch (_) {}
        reject(err);
      };

      connection.on("connect", (err: any) => {
        if (err) {
          return cleanupAndReject(
            new Error(`SQL Server Connect error: ${err}`)
          );
        }

        const request = new Request(
          `SELECT * FROM [${tableName}]`,
          (reqErr: any) => {
            if (reqErr) {
              return cleanupAndReject(reqErr);
            }
          }
        );

        request.on("row", (columns: any[]) => {
          const row: Record<string, unknown> = {};
          columns.forEach((column: any) => {
            const colName = column?.metadata?.colName as string | undefined;
            if (colName) row[colName] = column.value;
          });
          results.push(row);
        });

        request.on("requestCompleted", () => {
          try {
            connection.close();
          } catch (_) {}
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
