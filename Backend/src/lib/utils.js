import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const generatetoken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    });
}