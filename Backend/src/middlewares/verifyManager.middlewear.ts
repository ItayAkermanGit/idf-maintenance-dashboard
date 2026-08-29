import { Request, Response, NextFunction } from "express";

export function verifyManager(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if (req.user && req.user.isManager === "0") { 
        next();
    } else {
        res.status(403).json({ message: "Access denied. Managers only. "})
    }
}