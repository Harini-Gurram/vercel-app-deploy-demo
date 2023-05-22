const express = require('express');
const cors=require('cors');

const axios = require('axios');
const qs = require('qs');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Replace with your desired response
  });
app.post('/exchange-token', async (req, res) => {
  try {
    const { code } = req.body;
    console.log(code)
    const response = await axios({
      method: 'post',
      url: 'https://api.instagram.com/oauth/access_token',
      data: qs.stringify({
        client_id: '1379077412944454',
        client_secret: 'd0e3c7c69865b68644e4ec626048db03',
        grant_type: 'authorization_code',
        redirect_uri: 'https://insta-basic.vercel.app/',
        code: code,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error exchanging token:', error);
    res.status(500).json({ error: 'Failed to exchange token' });
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
