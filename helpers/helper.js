require('dotenv').config()
const {cyrptoCurrenciesList} = require('../api/coingecko')

module.exports = {
    getHistory: async (coinSymbol) =>{
        const list = await cyrptoCurrenciesList()
        let id = null
    
        list.map( coin => {
            if(coin.symbol === coinSymbol ){
                id = coin.id
            }
        })
    }
}