require('dotenv').config()
const fetch = require('node-fetch');

const getPrice = async (coinSymbol) =>{
    const url = `${process.env.NOMICS_URL}/prices?key=${process.env.NOMICS_API_KEY}`
    const response = await fetch(url, { method: 'GET'})

    if(response.ok){
        const value = await response.json()

        const coin = value.filter( coin => coin.currency === coinSymbol )

        if(coin){
            return parseFloat(coin[0].price)
        }
        
    }

    return null
};

exports.getPrice = getPrice;