import express, { Express, Request, Response } from "express";
import userRouter from "./routes/users";

const host = "0.0.0.0";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json({});
});

app.use("/users", userRouter);

app.listen(port, host, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
