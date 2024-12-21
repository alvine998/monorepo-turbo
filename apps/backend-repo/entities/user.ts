export interface User {
    id?: string; // Optional, as Firestore automatically generates IDs
    name: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  