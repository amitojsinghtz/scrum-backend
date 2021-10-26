const httpStatus = require('http-status');
const { Projects } = require('../models')
const ApiError = require('../utils/ApiError');

/**
 * Create a Project
 * @param {Object} projectBody
 * @returns Promise<Projects>
 */
 const createProject = async (projectBody) => {
    if (Projects) {
      console.log(projectBody)
      return Projects.create(projectBody);
    } else {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Project not Exist');
    }
  };

  const getProject = async (filter,options) => {
    const projectss = await Projects.paginate(filter,options);
    return projectss;
  };

  const getProjectById = async (id) => {
    return Projects.findById(id);
  };

  const deleteProjectById = async (projectId) => {
    const project = await getProjectById(projectId);
    if (!project) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
    }
    await project.remove();
    return project;
  };

  const updateProjectById = async (projectId, updateBody) => {
    const project = await getProjectById(projectId);
    if (!project) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
    }
    Object.assign(project, updateBody);
    await project.save();
    return project;
  };
  module.exports = {
    createProject,
    getProject,
    getProjectById,
    deleteProjectById,
    updateProjectById
  };