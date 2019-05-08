const config = require("dotenv").config();
const express = require("express");
const logger = require("morgan");

/**
 * Local Import, usually routes
 */
const indexRoutes = require("./routes/index");
const restaurantRoutes = require("./routes/restaurant");
const recipesRoutes = require("./routes/recipes");
/**
 * Initialize Express App
 */
const app = express();

/**
 * Bodyparser
 */
app.use(express.json());
/**
 * Morgan HTTP Request Logger
 */
app.use(logger("dev"));

/**
 * Routes
 */
app.use("/", indexRoutes);

/**
 * Express Listener, Listen to Port 6900, if not specified
 */
app.listen(process.env.PORT || 6900, () => {
  console.log(`Server is listening on localhost:${process.env.PORT || 6900}`);
});
