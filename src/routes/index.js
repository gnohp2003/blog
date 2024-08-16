const siteRouter = require('./site');

function route(app) {
  app.use('/', siteRouter);

  app.use('/search', siteRouter);
}

module.exports = route;
