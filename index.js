const config = require("dotenv").config();
const express = require("express");
const logger = require("morgan");

/**
 * Local Import, usually routes
 */
const Routes = require("./routes");

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

app.use("/", Routes.Root);
app.use("/user", Routes.User);
app.use("/restaurants", Routes.Restaurant);
app.use("/recipes", Routes.Recipe);
/**
 * Express Listener, Listen to Port 6900, if not specified
 */
app.listen(process.env.PORT || 6900, () => {
  console.log(`Server is listening on localhost:${process.env.PORT || 6900}`);
});
