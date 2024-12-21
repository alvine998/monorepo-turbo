import * as express from "express";
import {User} from "../entities/user";

// Extend the Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: User;  // You can specify a more specific type for 'user' if needed
    }
  }
}
