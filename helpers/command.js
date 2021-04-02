
    const {getPrice} = require('../api/nomics')
    const {cyrptoCurrenciesList,getCurrencyHistory} = require('../api/coingecko')

    const contructMessage = async (parts) => {
        if (parts.length !== 2){
            return
        }
        
        return await getPrice(parts[1])
    }

    const getHistory = async (parts) => {
        if (parts.length !== 2){
            return
        }
        
        const list = await cyrptoCurrenciesList()
        let id = null
        list.map( coin => {
            if(coin.symbol === parts[1].toLowerCase()){
                id = coin.id
            }
        })

        const response = await getCurrencyHistory(id)
        let msg = ''

        response.map( history => {
            msg += `Value:${history.value} - Date:${history.day}\n`
        })
       return msg
    }

  

module.exports = {
    getMessage: async(message) =>{
        const parts = message.split(' ')
        let returnMsg = ''

        const messageArray = [
            { regex: /^-crypto/g, message: await contructMessage(parts) },
            { regex: /^-history/g, message: await getHistory(parts) },
        ];

        messageArray.map(msg => {
            if (message.match(msg.regex)) {
                returnMsg += msg.message
            }
        });

        return returnMsg
    }
}