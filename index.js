const Koa = require('koa');
const logger = require('koa-logger');

const db = require('./src/db/database');

const router = require('./src/routes');

const app = new Koa();
const PORT = 8081;

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger());
}

app.use(router());

// Fire it up
db();
app.listen(PORT, () => console.log(`running on port ${PORT}`));

module.exports = app;
