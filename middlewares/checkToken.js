const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try{
        let token =
            req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"
                ? req.headers.authorization.split(" ")[1] : null;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err)
                    return res.status(400).json({message: "Invalid Token..."});

                req.decodedToken = decoded;
                next();
            });
        } else {
            res.status(403).json({message: "Access Denied! Unauthorized User"});
        }
    }catch (error){
        res.status(404).json({message: error.message});
    }
};