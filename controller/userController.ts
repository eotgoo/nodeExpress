import { Request, Response } from "express";
import User from "../model/user";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл хоосон байна." });
    }

    res.status(201).json({ message: "Хэрэглэгчдийн мэдээлэл олдлоо.", users });
  } catch (error) {
    res.status(400).json({ message: "alda garla", error: error });
  }
};
