const Joi = require('joi');
const { objectId } = require('./custom.validation');
const createProject = {
  body: Joi.object().keys({
    name:Joi.string().required(),
    short_name:Joi.string().required(),
    status:Joi.string().required().valid("started","onhold","stack","complete"),
    priority:Joi.string().required().valid("low","medium","high"),
    role: Joi.string().required().valid('owner', 'admin', 'user', 'client', 'guest'),
    estimated_hours:Joi.number().required(),
    created_at:Joi.date(),
    created_by:Joi.string(),
    updated_at:Joi.date(),
    updated_by:Joi.string(),
    start_date:Joi.string().required(),
    end_date:Joi.string().required()
  }),
};

const getProject = {
    query: Joi.object().keys({
      name: Joi.string(),
      short_name:Joi.string(),
      status:Joi.string(),
      priority:Joi.string(),
      role: Joi.string(),
      estimated_hours: Joi.number(),
      created_at:Joi.date(),
      created_by:Joi.string(),
      updated_at:Joi.date(),
      updated_by:Joi.string(),
      start_date:Joi.string(),
      end_date:Joi.string()
  })
  };

  const getProjectById = {
    params: Joi.object().keys({
      projectId: Joi.string().custom(objectId),
    }),
  };

  const deleteProject = {
    params: Joi.object().keys({
      projectId: Joi.string().custom(objectId),
    }),
  };

  const updateProject = {
    params: Joi.object().keys({
      projectId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
      .keys({
        _id: Joi.string().required(),
        name:Joi.string().required(),
        short_name:Joi.string().required(),
        status:Joi.string().required().valid("started","onhold","stack","complete"),
        priority:Joi.string().required().valid("low","medium","high"),
        role: Joi.string().required().valid('owner', 'admin', 'user', 'client', 'guest'),
        estimated_hours:Joi.number().required(),
        created_at:Joi.date(),
        created_by:Joi.string(),
        updated_at:Joi.date(),
        updated_by:Joi.string(),
        start_date:Joi.string(),
        end_date:Joi.string()
      })
      .min(1),
  };
module.exports = {
    createProject,
    getProject,
    getProjectById,
    deleteProject,
    updateProject
  };