require('dotenv').config()
const urlPrefix ="https://api.nomics.com/v1"
const moment = require('moment');
const fetch = require('node-fetch');

module.exports = {
    getPrice: async (coinSymbol) =>{
        const url = `${urlPrefix}/prices?key=${process.env.NOMICS_API_KEY}`
        const response = await fetch(url, { method: 'GET'})
    
        if(response.ok){
            const value = await response.json()
    
            const coin = value.filter( coin => coin.currency === coinSymbol )
    
            if(coin.length > 0){
                return parseFloat(coin[0].price)
            }
            
        }
    
        return null
    }

}