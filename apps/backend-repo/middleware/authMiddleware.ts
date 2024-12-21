import { Request, Response, NextFunction } from 'express';
import { admin } from '../config/firebaseConfig';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Unauthorized: No token provided' });
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        (req as any).user = decodedToken; // Attach the user info to the request object
        next();
    } catch (error: any) {
        res.status(401).json({ error: 'Unauthorized: Invalid token', details: error.message });
    }
};
