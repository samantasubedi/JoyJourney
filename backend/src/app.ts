import express from "express";
import { Request, Response } from "express";
const port:number = 5000;
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("this is homepage");
});
app.listen(port, () => {
  console.log("server running in port", port);
});
