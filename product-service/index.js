const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Keyboard", price: 25 });
});

app.listen(PORT, () => {
  console.log(`Product Service running on ${PORT}`);
});
