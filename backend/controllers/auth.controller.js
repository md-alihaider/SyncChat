import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    //accept credentials
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords do not match",
      });
    }
    //check if user already exists
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: "User already exists",
      });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user pic
    const boyProfilePic = `https://avatarapi.runflare.run/public/boy?usearname=${username}`;
    const girlProfilePic = `https://avatarapi.runflare.run/public/girl?usearname=${username}`;

    // Create a new user
    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    //save user
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: "Invalid user data",
      });
    }
  } catch (error) {
    console.log("Error signing up controller:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    //check credentials
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || "",
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid username or password",
      });
    }
    //generate token
    generateTokenAndSetCookie(user._id, res);
    //send response
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error login controller:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const logoutUser = (req, res) => {
  try {
    //clear cookie
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Error logout controller:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
