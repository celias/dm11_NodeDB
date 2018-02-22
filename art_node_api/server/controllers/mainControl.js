const axios = require('axios');
const { clientSecret, apiUrl, clientID } = require('./../config.js');

let myArt = [];

axios
  .post(apiUrl, { client_id: clientID, client_secret: clientSecret })
  .then(response => {
    axios.defaults.headers.common['X-Xapp-Token'] = response.data.token;
  }).catch(console.log);

  const getArtsy = (req, res, next) => {
     axios.get(`https://api.artsy.net:443/api/artists?similarity_type=contemporary&artworks=true&sort=-trending&size=50&page=1`).then(response => {
       
        return res.json(response.data);
          }).catch(console.log);
      };

  const addArt = (req, res, next) => {
    console.log(req.body, req.params);
    
    const { img, name } = req.body;
    let { id } = req.params;
    
    myArt.push({ img, name, id });
    return res.status(200).json(myArt)

  }

      
module.exports = {
    getArtsy,
    addArt
};




