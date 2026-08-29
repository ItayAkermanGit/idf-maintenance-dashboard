import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthPayLoad } from "../../../Shared/src/types/payload";

declare global {
  namespace Express {
    interface Request {
      user: AuthPayLoad;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || "";

if (!JWT_SECRET) {
  throw new Error(
    "FATAL ERROR: JWT_SECRET is not defined in environment variables",
  );
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const AUTH_HEADERS = req.headers["authorization"];
  const TOKEN = AUTH_HEADERS && AUTH_HEADERS.split(" ")[1];

  if (!TOKEN) {
    res.status(401).json({ message: "Access Token Required." });
    return;
  }

  jwt.verify(TOKEN, JWT_SECRET, (err, decodedUser) => {
    if (err) {
      res.status(403).json({ messege: "Invalid or expired token" });
      return;
    }

    req.user = decodedUser as AuthPayLoad;

    next();
  });
}
