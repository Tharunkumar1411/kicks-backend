const { User } = require("../../DB/Models/productModels");

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("User created:", user);
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error" });
    }
}