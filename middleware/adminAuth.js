module.exports = {
    isAdmin: (req, res, next) => {
        const user = req.headers['user'];
        if(user == "admin") {
            next();
        } else {
            res.status(401).send("Unauthorized")
        }
    }
};
