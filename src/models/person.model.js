const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const personSchema = mongoose.Schema(
  {
  name: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  shortName: {
    type: String,
  },
  image: {
    type: String,
  },
  skills: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "invited", "disabled", "recent", "client"],
    default: "disabled",
  },
  role: {
    type: String,
    enum: ["owner", "admin", "user", "client", "guest"],
    default: "owner",
  },
  lastActivity: {
    type: Date,
    default: Date.now,
  },
  projects: {
    type: String,
  },
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
   // timestamp:true
  },
  updatedBy: String,
  updatedAt: {
    type: Date,
    default: Date.now,
    //timestamp:true
  },
});
personSchema.plugin(toJSON);
personSchema.plugin(paginate);
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
