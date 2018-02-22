
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { clientSecret1, clientSecret, clientID, apiUrl } = require('./config');
const { getArtsy, addArt } = require('./controllers/mainControl');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/apiData', getArtsy);
app.post('/api/art/:id', addArt);



const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}, betch.`);
});