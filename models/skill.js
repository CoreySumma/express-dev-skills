const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'Javascript', done: true},
    {id: 139608, skill: 'CSS', done: true}
  ];

  module.exports = {
    getAll,
    getOne
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }