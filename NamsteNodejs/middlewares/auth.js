const authAdmin = (req, res, next) => {
    console.log("Admin route run")
    const token = "xy444z";
    const isAuthorised = token === "xyz";
    if (!isAuthorised) {
        res.status(401).send("Unauthorised user")
    }
    else {
        next();
    }
}
module.exports = { authAdmin }