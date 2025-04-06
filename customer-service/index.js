const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/customer/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "John Doe", email: "john@example.com" });
});

app.listen(PORT, () => {
  console.log(`Customer Service running on port ${PORT}`);
});
