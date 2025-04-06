const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3003;

app.use(express.json());

app.get("/order/:customerId/:productId", async (req, res) => {
  const { customerId, productId } = req.params;
  const aCustomer = await axios.get(
    `http://localhost:3001/customer/${customerId}`
  );
  const aProduct = await axios.get(
    `http://localhost:3002/product/${productId}`
  );

  res.json({
    customer: aCustomer.data,
    product: aProduct.data,
    status: "Order placed successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Shopping Service running on port ${PORT}`);
});
