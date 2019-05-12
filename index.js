const config = require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const Sentry = require("@sentry/node");

/**
 * Local Import, usually routes
 */
const Routes = require("./routes");

// Initialize Express App
const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// Initialize and Use Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN
});

app.use(Sentry.Handlers.requestHandler());

// Routes
app.use("/", Routes.Root);
app.use("/users", Routes.User);
app.use("/restaurants", Routes.Restaurant);
app.use("/recipes", Routes.Recipe);

// Handle Sentry
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

/**
 * Express Listener, Listen to Port 6900, if not specified
 */
app.listen(process.env.PORT || 6900, () => {
  console.log(`Server is listening on localhost:${process.env.PORT || 6900}`);
});
