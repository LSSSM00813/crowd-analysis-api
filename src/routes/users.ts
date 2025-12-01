import { Router, Request, Response } from "express";
import { DBAccessorTemp } from "../util/DBAccessorTemp";
import { DBAccountAccessor } from "../util/DBAccountAccessor";

const userRouter = Router();

// ユーザー一覧取得
userRouter.get("/", (req: Request, res: Response) => {
  console.log("User list called");
  res.json([{ user_id: 1, username: "Taro" }]);
});

userRouter.get("/DBTest", (req: Request, res: Response) => {
  console.log("DBTest called");

  DBAccountAccessor.selectAll().then((accounts) => {
    res.json(accounts);
  }).catch((error) => {
    res.status(500).json({ error: error.message });
  });

  // DBAccessor.selectAll("account").then((results) => {
  //   res.json(results);
  // }).catch((error) => {
  //   console.log(error);
  //   res.status(500).json({ error: error.message });
  // });
});

// ユーザー詳細取得
userRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ user_id: id, username: "Taro" });
});

export default userRouter;