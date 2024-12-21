import { Router, Request, Response } from "express";
// import { createUserHandler, deleteUserHandler, getUsersHandler, updateUserHandler } from "../controller/api";
import { getUsersHandler, updateUserHandler } from "../controller/api";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.patch("/update-user-data/:id", updateUserHandler);
router.get("/fetch-user-data", getUsersHandler);

export default router;
