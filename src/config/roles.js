const allRoles = {
  user: [],
  person: [],
  admin: ['getUsers', 'manageUsers','managePersons','getPersons'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));
module.exports = {
  roles,
  roleRights,
};
