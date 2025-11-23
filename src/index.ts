import express, { Express, Request, Response } from "express";

const host = "0.0.0.0";
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, host, () => {
  console.log(`Server is running on port http://${host}:${port}`);
});
