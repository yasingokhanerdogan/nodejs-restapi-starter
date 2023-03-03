const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    createToken: async (req, res) => {
        try {
            const {id, email, password} = req.body;

            if (!id && !email && !password)
                return res.status(400).json({message: "ID, Email and Password Required.", token: null});

            let token = jwt.sign({email, id}, process.env.JWT_SECRET_KEY);
            res.status(200).json({
                message: "token created",
                user: {id, email}, token
            });
        } catch (error) {
            res.status(404).json({message: error.message, token: null});
        }
    },
    signIn: async () => {},
    signUp: async () => {},
    signOut: async () => {},
};