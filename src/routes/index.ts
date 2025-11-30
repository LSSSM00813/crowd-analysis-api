import { Request, Response, Router } from "express";
import userRouter from "./users";
import { INFO } from "../lib/core/logger";

const indexRouter = Router();

indexRouter.use("/users", userRouter);

indexRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default indexRouter;
