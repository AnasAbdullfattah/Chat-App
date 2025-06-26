export const signup = async (req, res) => {

    try {

        const { email, fullName, profilepic, password } = req.body;

        // Validate input
        if (!email || !fullName || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        const newUser = new User({ email, fullName, profilepic, password });
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
