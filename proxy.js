const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());
let config = {
    headers: {'Authorization': 'Bearer iDF7DZjBGbDZD1zr0WIoVvV1lbqncuRu'},
    params: {
        "src": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "dst": "0x111111111117dc0aa78b770fa6a738034120c302",
        "amount": "1000000000000",
        "includeTokensInfo": "true",
        "includeGas": "true"
    },
  }
app.get(`/test`, async(req, res) => {
    //console.log(Id)
   await axios
    .get(
      `https://api.1inch.dev/swap/v5.2/1/quote`,config
 ).then((response)=>{
        // console.log("worked");
        // console.log(response.data.streamKey)
        //console.log(response.data)
        const data = response.data;
        //const res2 = JSON.parse(response.data)
        res.json(data)
       
    }).catch( error => {
        console.error(`Could not get products: ${error}`);
        res.json(error)
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
//app.listen(8080);