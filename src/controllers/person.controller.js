const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { personService } = require('../services');

const createPerson = catchAsync(async (req, res) => {
  const person = await personService.createPerson(req.body);
  res.status(httpStatus.CREATED).send(person);
});

const getPersons = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['name', 'role', 'status']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  // const result = await personService.queryPersons(filter, options);
  // console.log(result)
  // res.send(result);
  result = await personService.findAll();
  return res.json(result)
});
const getPersonById = catchAsync(async (req, res) => {
  const user = await personService.getPersonById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});
const updatePerson = catchAsync(async (req, res) => {
  const user = await personService.updatePersonById(req.params.userId, req.body);
  res.send(user);
});
const deletePerson = catchAsync(async (req, res) => {
  await personService.deletePersonById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
  createPerson,
  getPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
