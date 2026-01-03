import User from "../models/User.js";

export const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });
  await user.save()
  res.status(201).json({
    success: true,
    user,
  });
};

/* LOGIN */
export const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    success: true,
    token: generateToken(user._id),
    user,
  });
};

/* LOGOUT */
export const logout = async (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully",
  });
};
