import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "douglas@email",
    password: "12345",
    techs: ["Node.js", "ReactJS", { title: "JavaScript", experience: 100 }],
  });
  return res.json({ message: "Hello World" });
}
