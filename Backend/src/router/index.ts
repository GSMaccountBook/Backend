import express, { Request, Response, NextFunction } from "express";

const index = express.Router();

index.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("world");
});

export = index;