const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const projectValidation = require('../../validations/projects.validations');
const projectController = require('../../controllers/projects.controller');

const router = express.Router();

router.route('/')
.post(projectController.createProject)
.get(validate(projectValidation.getProject), projectController.getProject);

router
  .route('/:projectId')
  .get( validate(projectValidation.getProjectById), projectController.getProjectById)
  .delete(validate(projectValidation.deleteProject), projectController.deleteProject)
  .put(validate(projectValidation.updateProject), projectController.updateProject)

module.exports = router;