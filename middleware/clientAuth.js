module.exports = {
    isLogin: (req, res, next) => {
        const user = req.headers['user'];
        if(user == "client") {
            next();
        } else {
            res.status(401).send("Unauthenticated")
        }
    }
};