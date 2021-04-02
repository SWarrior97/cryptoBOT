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
    getCurrencyHistory: async (id) => {
        const now = moment()
        const lastWeek = now.clone().subtract(1, 'weeks');
        const retrunArray = []
        
        while(lastWeek.isSameOrBefore(now)){
            const date = lastWeek.clone().format('DD-MM-YYYY')

            const url = `${urlPrefixCoinGecko}/coins/${id}/history?date=${date}`
            const response = await fetch(url, { method: 'GET'})


            if(response.ok){
                const json = await response.json()
                const value = json.market_data.current_price.usd

                retrunArray.push({
                    day:date,
                    value:value
                })
            }

            lastWeek.add(1,'days')
        }

         return retrunArray
    }

}

