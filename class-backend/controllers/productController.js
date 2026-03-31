exports.getAllProducts = (req, res) => {
  res.json({
    message: "All products fetched successfully",
    products: []
  });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;

  res.json({
    message: `Product with ID ${productId}`,
  });
};

exports.createProduct = (req, res) => {
  const productData = req.body;

  res.json({
    message: "Product created successfully",
    data: productData
  });
};

exports.updateProduct = (req, res) => {
  const productId = req.params.id;

  res.json({
    message: `Product ${productId} updated successfully`
  });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;

  res.json({
    message: `Product ${productId} deleted successfully`
  });
};