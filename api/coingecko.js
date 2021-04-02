require('dotenv').config()
const urlPrefixCoinGecko ="https://api.coingecko.com/api/v3"
const moment = require('moment');
const fetch = require('node-fetch');

module.exports = {
    cyrptoCurrenciesList: async () => {
        const url = `${urlPrefixCoinGecko}/coins/list`
        const response = await fetch(url, { method: 'GET'})
    
        if(response.ok){
           return await response.json()
        }
    
        return null
    },

}