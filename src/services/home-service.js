const Model = require('../models/home-model');

module.exports = () => {
  const Service = {
    get: async () => {
      const result = await Model.find();
      return result;
    },
    create: async homeBody => {
      const result = await Model.create(homeBody);
      return result;
    },
  };
  return Service;
};
