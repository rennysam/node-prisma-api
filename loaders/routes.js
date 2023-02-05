const productRouter = require("../routes/product");
const express = require("express");

/**
 * Initialize and assign top level routes to route handlers.
 *
 * @param {express.Application} app
 */
const initRoutes = (app) => {
  app.use("/product", productRouter);
};

module.exports = initRoutes;
