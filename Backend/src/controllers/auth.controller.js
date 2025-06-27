import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {

    try {

        const { email, fullName, profilepic, password } = req.body;

        // Validate input
        if (!email || !fullName || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        // const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create new user
        const newUser = new User({ 
            email : email, 
            fullName: fullName, 
            profilepic : profilepic || "",
            password : hashedPassword});
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
        
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }

};
export const logout = (req, res) => {

};
export const login = (req, res) => {

};
