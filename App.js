const DB_PATH =
  "mongodb+srv://ved:ved@airbnb.hp2nr.mongodb.net/My_PortFolio?retryWrites=true&w=majority&appName=airbnb";

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Router = require("./Routers/path");
const AdminRoutes = require("./Routers/Admin");
const app = express();
const PORT = 3000;

// Middleware
app.set("view engine", "ejs");
app.set("views", "Views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/admin", AdminRoutes);
app.use("/", Router);

// MongoDB Connection
mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Error while connecting MongoDB:", err);
  });
