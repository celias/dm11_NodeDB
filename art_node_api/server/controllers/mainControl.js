const axios = require('axios');
const { clientSecret, apiUrl, clientID } = require('./../config.js');

axios
  .post(apiUrl, { client_id: clientID, client_secret: clientSecret })
  .then(response => {
    axios.defaults.headers.common['X-Xapp-Token'] = response.data.token;
  }).catch(console.log);

const getArtsy = (req, res, next) => {
    axios.get(`https://api.artsy.net/api/artists?similarity_type=contemporary&artworks=true&size=80&page=1`).then(response => {
        console.log(response.data)
        return res.json(response.data);
          }).catch(console.log);
      };

    
module.exports = {
    getArtsy
};
// https://api.artsy.net/api/artists?similarity_type=contemporary&artworks=true&published_artworks=true&size=5&page=1