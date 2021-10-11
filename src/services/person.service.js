const httpStatus = require('http-status');
const { Person } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Person
 * @param {Object} personBody
 * @returns Promise<Person>
 */
const createPerson = async (personBody) => {
  if (Person) {
    return Person.create(personBody);
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Person not Exist');
  }
};

const queryPersons = async (filter, options) => {
  const persons = await Person.paginate(filter, options);
  return persons;
};

const getPersonById = async (id) => {
  return Person.findById(id);
};

const updatePersonById = async (userId, updateBody) => {
  const person = await getPersonById(userId);
  if (!person) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(person, updateBody);
  await person.save();
  return person;
};
const deletePersonById = async (userId) => {
  const user = await getPersonById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};
module.exports = {
  createPerson,
  queryPersons,
  getPersonById,
  updatePersonById,
  deletePersonById
};
