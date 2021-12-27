const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error"); //Error model
const User = require("../models/user"); //User schema for database
const Nutrient = require("../models/nutrient"); //Nutrient schema for database
const Food = require("../models/food"); // Food schema for database

//Login function
async function login(req, res, next) {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Logging in failed,try again later", 500));
  }
  //If the user doesn't exist or the password doesn't match then credentials are wrong
  if (!existingUser || existingUser.password !== password) {
    return next(new HttpError("Invalid credentials", 401));
  }
  //If there is no error then success message is displayed
  res.json({
    message: "Logged in successfully",
    success: true,
    cToken: "Some token",
    user: existingUser,
  });
}

//Signup function
async function signup(req, res, next) {
  //The errors in input data are caught in 'errors' variable after passing validation checks
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed", 422));
  }
  const { name, age, email, password } = req.body;
  let existingUser;
  try {
    //If a user with given email already exixts then his information is stored in 'exixtingUser' variable
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Signup failed,try again later", 500));
  }
  if (existingUser) {
    return next(new HttpError("User already exists, login instead", 422));
  }
  //If user doesn't exist then new user is created
  const newUser = new User({
    name,
    age,
    image: "url",
    email,
    password,
  });
  try {
    await newUser.save();
  } catch (err) {
    return next(new HttpError("Could not create user, try again later", 500));
  }
  res.status(201).json({ message: "User created successfully" });
}

//Function to get user data from the database
async function getUser(req, res, next) {
  const userId = req.params.uid; //getting the user ID from the URL
  let foundUser, foundNutrients;
  try {
    //Get all the information of the user(with given ID) except the password
    foundUser = await User.findById(userId, "-password");
  } catch (err) {
    return next(new HttpError("Could not fetch user,try again later", 500));
  }
  try {
    //Get all the nutrional information related to the user
    foundNutrients = await Nutrient.find({ userId: userId });
  } catch (err) {
    return next(new HttpError("Could not fetch user,try again later", 500));
  }
  if (!foundUser) {
    return next(new HttpError("User does not exist", 404));
  }
  if (!foundNutrients) {
    return next(new HttpError("No data found", 404));
  }
  res.json({
    //Returning MongoDB documents as javascript objects
    user: foundUser.toObject({ getters: true }),
    nutrients: foundNutrients.map((n) => n.toObject({ getters: true })),
  });
}

//Function to update user information
async function updateUser(req, res, next) {
  //The errors in input data are caught in 'errors' variable after passing validation checks
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed", 422));
  }
  const { email, age, password } = req.body;
  const userId = req.params.uid; //Get user ID from the URL
  let foundUser;
  try {
    //Find the user with given ID whose information is to be updated
    foundUser = await User.findById(userId);
  } catch (err) {
    return next(new HttpError("Cound not update details,try again later", 500));
  }
  //Check if password is correct
  if (foundUser.password !== password) {
    return next(new HttpError("Incorrect password", 401));
  }
  //Update the information
  foundUser.age = age;
  foundUser.email = email;
  try {
    await foundUser.save();
  } catch (err) {
    return next(new HttpError("Cound not update details,try again later", 500));
  }
  res.json({ message: "updated successfully" });
}

//Function to add the nutritional information related to a user
async function postNutrients(req, res, next) {
  //The errors in input data are caught in 'errors' variable after passing validation checks
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed", 422));
  }
  const userId = req.params.uid; //Get user ID from the URL
  const { date, foodName, foodWeight } = req.body;
  let foundNutrientData, foundFoodData;
  try {
    // If some nutritional information for the same date already exixts then we get from the database
    // and store it in 'foundNutrientData' variable
    foundNutrientData = await Nutrient.findOne({ userId: userId, date: date });
  } catch (err) {
    return next(
      new HttpError(
        "Could not complete your request,please try again later",
        500
      )
    );
  }
  try {
    //Nutritional value of the food item which the user has eaten is fetched from the database
    //and stored in 'foundFoodData' variable
    foundFoodData = await Food.findOne({ title: foodName });
  } catch (err) {
    return next(
      new HttpError("Food item not found,please add the item first", 404)
    );
  }
  //Amount of carbs,fats,proteins and calories consumed by the user in a single meal are calculated
  const carbs = (foodWeight * foundFoodData.carbs) / foundFoodData.weight;
  const fats = (foodWeight * foundFoodData.fats) / foundFoodData.weight;
  const calories = (foodWeight * foundFoodData.calories) / foundFoodData.weight;
  const proteins = (foodWeight * foundFoodData.proteins) / foundFoodData.weight;

  //If we have some exixting data then new values are added to the existing ones
  //otherwise we create a new entry for the given date and save it to the database
  if (foundNutrientData) {
    foundNutrientData.fats += fats;
    foundNutrientData.calories += calories;
    foundNutrientData.proteins += proteins;
    foundNutrientData.carbs += carbs;
    try {
      await foundNutrientData.save();
    } catch (err) {
      return next(
        new HttpError(
          "Could not complete your request,please try again later",
          500
        )
      );
    }
  } else {
    const newNutrientData = new Nutrient({
      date,
      userId,
      carbs,
      fats,
      calories,
      proteins,
    });
    try {
      await newNutrientData.save();
    } catch (err) {
      console.log(err);
      return next(
        new HttpError(
          "Could not complete your request,please try again later",
          500
        )
      );
    }
  }
  res.json({ message: "Successfully saved the deatils" });
}

exports.signup = signup;
exports.login = login;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.postNutrients = postNutrients;
