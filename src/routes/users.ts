import { Router, Request, Response } from "express";

const userRouter = Router();

// ユーザー一覧取得
userRouter.get("/", (req: Request, res: Response) => {
  res.json([{ user_id: 1, username: "Taro" }]);
});

// ユーザー詳細取得
userRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ user_id: id, username: "Taro" });
});

export default userRouter;