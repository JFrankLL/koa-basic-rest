const combineRouters = require('koa-combine-routers');
const homeRouter = require('./home-router');
const pokemonRouter = require('./pokemon-router');

const router = combineRouters(homeRouter, pokemonRouter);

module.exports = router;
