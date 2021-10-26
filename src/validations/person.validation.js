const Joi = require('joi');
const { objectId } = require('./custom.validation');
const createPerson = {
  body: Joi.object().keys({
    //name: {
     // firstName:Joi.string().required(),
      //lastName:Joi.string().required()
    //},
  //  ,
   // shortName:Joi.string(),
    email: Joi.string(),
   assignedproject: Joi.string(),
   // image:Joi.string().required(),
    //skills:Joi.string().required(),
    //status:Joi.string().required().valid('active', 'invited', 'disabled', 'recent', 'client'),
     role: Joi.string(),
     color:Joi.string(),
   // lastActivity:Joi.date(),
    // projects:Joi.string().required(),
    // createdBy:Joi.string().required(),
     createdAt:Joi.date(),
    // updatedBy:Joi.string().required(),
    // updatedAt:Joi.date()
  }),
};

const getPersons = {
  query: Joi.object().keys({
    firstName:Joi.string(),
    lastName:Joi.string(),
    email: Joi.string().email(),
    shortName:Joi.string(),
    role: Joi.string(),
    color:Joi.string(),
    sortBy: Joi.string(),
    status:Joi.string(),
    role: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
})
};
const getPersonById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updatePerson = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        firstName:Joi.string(),
       lastName:Joi.string(),
      shortName:Joi.string().required(),
      email: Joi.string().required().email(),
    //  image:Joi.string().required(),
     // skills:Joi.string().required(),
      //status:Joi.string().required().valid('active', 'invited', 'disabled', 'recent', 'client'),
     // role: Joi.string().required().valid('Owner', 'Admin', 'User', 'Client', 'Guest'),
      //lastActivity:Joi.date(),
      //projects:Joi.string().required(),
      //createdBy:Joi.string().required(),
      //createdAt:Joi.date(),
      //updatedBy:Joi.string().required(),
      //updatedAt:Joi.date()
    })
    .min(1),
};
const deletePerson = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
 
module.exports = {
    createPerson,
    getPersons,
    getPersonById,
    updatePerson,
    deletePerson
  };