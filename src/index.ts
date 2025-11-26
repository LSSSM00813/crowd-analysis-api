import express, { Express, Request, Response } from "express";
import cors from 'cors';

import userRouter from "./routes/users";

const host = "0.0.0.0";
const port = 3001;

const app: Express = express();

// CORS設定 (同一オリジンポリシー回避)
app.use(cors({
  origin: '*',
}))

app.get("/", (req: Request, res: Response) => {
  res.json({ "name": "Test", "message": "Hello World!" });
});

app.get("/api/result", (req: Request, res: Response) => {
  res.json({ "result": true });
});

// 各ルーターの登録
app.use("/users", userRouter);

app.listen(port, host, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
