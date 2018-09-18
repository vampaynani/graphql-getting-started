const axios = require('axios');

module.exports = async () => {
  const response  = await axios.get('http://www.mocky.io/v2/5ba12f603500005f005bbcec');
  return response.data;
};