import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in Ms
    httpOnly: true, // only accessible by the server
    sameSite: "strict", // cookie can only be sent from the same site
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
