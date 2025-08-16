const jwt= require('jsonwebtoken');

module.exports = (req,res,next)=>{

    try {
     
        const token = req.headers.authorization.split(" ")[1]; // Extract token from Authorization header
        if (!token) {
            return res.status(401).send({
                message: "No token provided",
                success: false
            });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Verify the token
    
         // safe assign
         req.userId = decodedToken.userId;   // ✅ best practice
         // OR if you need in body:
         req.body = req.body || {};
         req.body.userId = decodedToken.userId;
        next(); // Call the next middleware or route handler    

    }catch (error) {
        res.send({
            message: error.message,
            success: false
        });
    }


}