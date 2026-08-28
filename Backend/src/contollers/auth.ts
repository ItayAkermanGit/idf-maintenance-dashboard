import { Request, Response } from "express";
import JWT from "jsonwebtoken";
import { USER_MODEL } from "../models/user.interfaces";
import { AUTH_MESSAGES } from "../../../Shared/src/constants";

export interface LoginRequest {
  pernr: string;
}

export interface AuthPayLoad {
  userId: string;
  isManager: number;
}

const JWT_SECRET = process.env.JWT_SECRET || "";

if (!JWT_SECRET) {
  throw new Error(
    "FATAL ERROR: JWT_SECRET is not defined in environment variables",
  );
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { pernr } = req.body;

    if (!pernr) {
      res.status(400).json({ message: AUTH_MESSAGES.PERNR_REQUIRED });
      return;
    }

    const USER = await USER_MODEL.findOne({ pernr });
    if (!USER) {
      res.status(401).json({ message: AUTH_MESSAGES.INVALID_PERNR });
      return;
    }

    const PAY_LOAD: AuthPayLoad = {
      userId: USER._id.toString(),
      isManager: USER.isManager,
    };

    const TOKEN = JWT.sign(PAY_LOAD, JWT_SECRET, { expiresIn: "2h" });

    res.status(200).json({
      message: AUTH_MESSAGES.LOGIN_SUCCESS,
      token: TOKEN,
    });
  } catch (error) {
    console.log("Login error:", error); // for debug perposus and for not sending the client side the error details for security reasons
    res.status(500).json({ message: AUTH_MESSAGES.INTERNAL_ERROR });
  }
}
