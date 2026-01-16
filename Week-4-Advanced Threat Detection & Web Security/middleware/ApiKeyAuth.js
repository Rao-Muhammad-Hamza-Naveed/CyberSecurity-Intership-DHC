module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== "SECURE_API_KEY_123") {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  next();
};
