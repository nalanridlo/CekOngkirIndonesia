const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const rajaOngkirAPI = axios.create({
  baseURL: "https://api.rajaongkir.com/starter",
  headers: { key: process.env.RAJAONGKIR_API_KEY },
});

app.get("/api/provinces", async (req, res) => {
  try {
    const response = await rajaOngkirAPI.get("/province");
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching provinces", error: error.message });
  }
});

app.get("/api/cities", async (req, res) => {
  try {
    const { province } = req.query;
    const response = await rajaOngkirAPI.get("/city", { params: { province } });
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching cities", error: error.message });
  }
});

app.post("/api/cost", async (req, res) => {
  try {
    const { origin, destination, weight, courier } = req.body;
    const response = await rajaOngkirAPI.post("/cost", {
      origin,
      destination,
      weight,
      courier,
    });
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error calculating shipping cost",
        error: error.message,
      });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
