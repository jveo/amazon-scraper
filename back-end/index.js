const express = require("express");
const app = express();
const cors = require("cors");
let test = "";

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    title: "hello world from the backendddd",
    request: req.method,
  });
});

app.post("/", (req, res) => {
  const response = { success: "true", method: req.method, body: req.body };
  console.log(response);
  test = req.body.term;
  res.send(response);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
