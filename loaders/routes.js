const formRouter = require("../routes/form");
const express = require("express");

/**
 * Initialize and assign top level routes to route handlers.
 *
 * @param {express.Application} app
 */
const initRoutes = (app) => {
  app.use("/form", formRouter);
};

module.exports = initRoutes;
