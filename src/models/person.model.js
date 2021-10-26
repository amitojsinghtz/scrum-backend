const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const validator = require('validator');
const personSchema = mongoose.Schema(
  {
 // name: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  //},
  shortName: {
    type: String,
  },
  // image: {
  //   type: String,
  // },
  skills: {
    type: String,
  },
  color:{
    type:String
  },
  status: {
    type: String,
    enum: ["active", "invited", "disabled", "recent", "client"],
    default: "disabled",
  },
  role: {
    type: String,
    enum: ["Owner", "Admin", "User", "Client", "Guest"],
    default: "User",
  },
  assignedproject:
  {
    type:String,
    default:"N/A"
  },
  lastActivity: {
    type: Date,
   // default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    },
  },
  projects: {
    type: String,
  },
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
    //timestamp:true
  },
  updatedBy: String,
  updatedAt: {
    type: Date,
   // default: Date.now,
    timestamp:true
  },
});
// personSchema.plugin(toJSON);
// personSchema.plugin(paginate);
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
