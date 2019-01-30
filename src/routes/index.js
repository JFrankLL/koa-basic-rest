const combineRouters = require('koa-combine-routers');
const homeRouter = require('./home-router');

const router = combineRouters(homeRouter);

module.exports = router;
