const Service = require('../services/home-service')();

module.exports = () => {
  const Controller = {
    get: async (ctx, next) => {
      ctx.status = 201;
      ctx.body = await Service.get();
      await next();
    },
    create: async (ctx, next) => {
      ctx.status = 201;
      ctx.body = await Service.create({ name: 'name' });
      await next();
    },
  };
  return Controller;
};
