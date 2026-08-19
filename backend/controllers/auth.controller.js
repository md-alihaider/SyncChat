import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords do not match",
      });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: "User already exists",
      });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatarapi.runflare.run/public/boy?usearname=${username}`;
    const girlProfilePic = `https://avatarapi.runflare.run/public/girl?usearname=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

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
export const loginUser = (req, res) => {
  res.send("Login Route");
};

export const logoutUser = (req, res) => {
  res.send("Logout Route");
};
