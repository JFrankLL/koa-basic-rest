const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  },
);

const Model = model('Home', schema);

module.exports = Model;