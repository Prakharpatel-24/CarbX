const express=require("express");
const {check}=require("express-validator");

const router=express.Router();

const userControllers=require("../controllers/user-controllers");

//User login route
router.post("/login",userControllers.login);

//User signup route
router.post("/signup",
[
    check("name").not().isEmpty(),
    check("age").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({min:8})
],
userControllers.signup);

//Get route to get the user information
router.get("/:uid",userControllers.getUser);

//Patch route to update user information
router.patch("/:uid",
[
    check("email").not().isEmpty(),
    check("age").not().isEmpty(),
    check("password").not().isEmpty()
],
userControllers.updateUser);

//Post route to add the nutritional information to a user account
router.post("/:uid",
[
    check("date").not().isEmpty(),
    check("foodName").not().isEmpty(),
    check("foodWeight").not().isEmpty()
],
userControllers.postNutrients)

module.exports=router;