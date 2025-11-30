import express, { Express, NextFunction, RequestHandler } from "express";
import indexRouter from "./routes";
import cors from "cors";
import { ServerConfig } from "./lib/config/serverConfig";
import { ERROR, INFO } from "./lib/core/logger";

const host = ServerConfig.instance.serverAddress;
const port = ServerConfig.instance.port;

const app: Express = express();

// CORS設定 (同一オリジンポリシー回避)
app.use(
  cors({
    origin: "*",
  })
);

const logger: RequestHandler = (req, res, next) => {
  INFO(`received by ${req.ip},(${req.method})${req.originalUrl}`);
  next();
};

// 全リクエスト共通のログ
app.use(logger);

// ルーティングの登録
app.use("/api", indexRouter);

// サーバー開始
const server = app.listen(port, host, () => {
  INFO(`Server is running on port http://localhost:${port}/api`);
});

// エラーイベントを監視
server.on("error", (err: Error) => {
  ERROR(`Server failed to start: ${err}`);
});
