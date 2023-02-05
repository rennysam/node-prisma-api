<<<<<<< Updated upstream
const booksRouter = require("../routes/book");
=======
const formRouter = require("../routes/form");
>>>>>>> Stashed changes
const express = require("express");

/**
 * Initialize and assign top level routes to route handlers.
 *
 * @param {express.Application} app
 */
const initRoutes = (app) => {
<<<<<<< Updated upstream
  app.use("/books", booksRouter);
=======
  app.use("/form", formRouter);
>>>>>>> Stashed changes
};

module.exports = initRoutes;
