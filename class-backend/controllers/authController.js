exports.generateToken = (req, res) => {
  const token = "sample-jwt-token";

  res.json({
    message: "Token generated successfully",
    token: token
  });
};