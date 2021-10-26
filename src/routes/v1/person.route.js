const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const personValidation = require('../../validations/person.validation');
const personController = require('../../controllers/person.controller');

const router = express.Router();
router
.route('/')
.post( validate(personValidation.createPerson), personController.createPerson)
.get( validate(personValidation.getPersons), personController.getPersons);

router
.route('/:userId')
.get(auth('getPersons'), validate(personValidation.getPersonById), personController.getPersonById)
.put(personController.updatePerson)
//.put( validate(personValidation.updatePerson), personController.updatePerson)
.delete( validate(personValidation.deletePerson), personController.deletePerson);

module.exports = router;
