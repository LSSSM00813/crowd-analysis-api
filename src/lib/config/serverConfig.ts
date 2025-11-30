import { INFO } from "../core/logger";

/** APIサーバーに関するConfigを定義します */
export class ServerConfig {
  public static instance: ServerConfig = new ServerConfig();

  public serverAddress: string;
  public port: number;

  private constructor() {
    this.serverAddress = process.env.SERVER_ADDRESS || "127.0.0.1";
    this.port = process.env.SERVER_PORT
      ? Number(process.env.SERVER_PORT)
      : 3001;

    INFO("ServerConfigが読み込まれました。" + this.toString());
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
