const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { personService } = require('../services');

const createPerson = catchAsync(async (req, res) => {
 // console.log(req.body.email.split(',').length)
  for(let i=0;i<req.body.email.split(',').length;i++)
  {
   const email=req.body.email.split(',')[i]
   //const name=
   const person = await personService.createPerson({
      email: email,
      assignedproject: req.body.assignedproject,
      role: req.body.role,
      color:req.body.color,
     // name: {
         firstName:email.split('@')[0]
         //}
         ,
      // name: { firstName: req.body.email.substring(0, req.body.email.lastIndexOf('@')) },
      shortName:email.substring(0, 2)

      // shortName:
      //   req.body.email
      //     .substring(0, req.body.email.lastIndexOf('.' || '@'))
      //     .split('')
      //     .shift()
      //     .charAt(0) + req.body.email.substring(0, req.body.email.lastIndexOf('@')).split('').pop().charAt(0),
    });
  }
  res.status(httpStatus.CREATED).send();
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
  console.log(req.params.userId);
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
