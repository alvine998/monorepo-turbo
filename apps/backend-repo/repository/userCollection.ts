import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const updateUser = async (userId: string, updates: Partial<User>) => {
    const userRef = db.collection('users').doc(userId);

    // Check if the document exists
    const doc = await userRef.get();
    if (!doc.exists) {
        return { message: `User with ID ${userId} not found`, code: 404 };
    }

    // Update the document
    await userRef.update({...updates, updatedAt: new Date()});
    return { message: 'User updated successfully', code: 200 };
};

const getUsers = async () => {
    try {
        const usersCollection = db.collection('users');
        const snapshot = await usersCollection.get();

        if (snapshot.empty) {
            return { message: 'No users found' };
        }

        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return;
    }
}

export { getUsers, updateUser }