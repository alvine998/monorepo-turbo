import { Request, Response } from "express";
import { getUsers, updateUser } from "../repository/userCollection";

export const updateUserHandler = async (req: Request, res: Response) => {
    const { id } = req.params; // Firestore document ID
    const userData = req.body; // Data to update
    try {
        const result = await updateUser(id, userData);
        res.status(result?.code).json({ message: result?.message });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }
};

export const getUsersHandler = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }
};