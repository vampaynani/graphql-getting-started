const axios = require('axios');

module.exports = (root, args) => {
  return axios.get(`https://swapi.co/api/people/${args.id}`)
  .then(res => {
    console.log(res.data);
    return res.data;
  });
};