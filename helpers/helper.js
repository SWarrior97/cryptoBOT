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
    },
     getUserFromMention: (mention) => {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return mention
        }
    }
}