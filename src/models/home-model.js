const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  },
);

const HomeModel = model('Documents', schema);

module.exports = HomeModel;