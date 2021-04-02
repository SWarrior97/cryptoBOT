
    const {getPrice} = require('../api/nomics')
    const {cyrptoCurrenciesList} = require('../api/coingecko')
    
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
       
        return await cyrptoCurrenciesList(parts[1])
    }

    const getMessage = async(message) =>{
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
  

exports.getMessage = getMessage;