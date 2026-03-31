exports.getAllUsers = (req, res) => {
  res.json({
    message: "All users fetched successfully",
    users: []
  });
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;

  res.json({
    message: `User with ID ${userId}`,
  });
};

exports.createUser = (req, res) => {
  const userData = req.body;

  res.json({
    message: "User created successfully",
    data: userData
  });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;

  res.json({
    message: `User ${userId} updated successfully`
  });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  res.json({
    message: `User ${userId} deleted successfully`
  });
};