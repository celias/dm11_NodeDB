const axios = require('axios');
const { clientSecret, apiUrl, clientID } = require('./../config.js');

axios
  .post(apiUrl, { client_id: clientID, client_secret: clientSecret })
  .then(response => {
    axios.defaults.headers.common['X-Xapp-Token'] = response.data.token;
  }).catch(console.log);

const getArtsy = (req, res, next) => {
    axios.get(`https://api.artsy.net:443/api/artists?similar_to_artist_id=4df69349bc3cf10001000726&sort=_slugs&size=12&page=1`).then(response => {
        console.log(response.data)
        return res.json(response.data);
          }).catch(console.log);
      };

    
module.exports = {
    getArtsy
};
// https://api.artsy.net/api/artists?similarity_type=contemporary&artworks=true&published_artworks=true&size=5&page=1
// https://api.artsy.net/api/artworks?similar_to_artwork_id=516dfb9ab31e2b2270000c45

// https://api.artsy.net/api/artists?similarity_type=default&artworks=true&size=56&page=7


//https://api.artsy.net:443/api/artists?similar_to_artist_id=4df69349bc3cf10001000726&sort=_slugs&size=30&page=1