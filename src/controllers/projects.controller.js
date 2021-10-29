const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { projectService } = require('../services');

const createProject = catchAsync(async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(httpStatus.CREATED).send(project);
});

const getProject = catchAsync(async (req, res) => {
    // const filter = pick(req.query, ['name', 'short_name','priority', 'status','role','estimated_hours','created_by','created_at','updated_by','updated_at']);
    // const options = pick(req.query, ['created_by','created_at','updated_by','updated_at']);
    // const result = await projectService.getProject(filter,options);
    // res.send(result);
    result = await projectService.findAll();
    return res.json(result)
  });

  const getProjectById = catchAsync(async (req, res) => {
    const project = await projectService.getProjectById(req.params.projectId);
    if (!project) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(project);
  });

  const deleteProject = catchAsync(async (req, res) => {
    await projectService.deleteProjectById(req.params.projectId);
    res.status(httpStatus.NO_CONTENT).send();
  });

  const updateProject = catchAsync(async (req, res) => {
    console.log(req.params)
    const project = await projectService.updateProjectById(req.params.projectId, req.body);
    res.send(project);
  });

module.exports = {
    createProject,
    getProject,
    getProjectById,
    deleteProject,
    updateProject
  };
  