import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("App is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
