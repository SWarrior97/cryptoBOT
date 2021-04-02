const message = require('./helper');
    
    const contructMessage = async (parts) => {
        if (parts.length !== 2){
            return
        }
       
        return await message.getPrice(parts[1])
    }

    const getMessage = async(message) =>{
        const parts = message.split(' ')
        let returnMsg = ''

        const messageArray = [
            { regex: /^-crypto/g, message: await contructMessage(parts) }
        ];

        messageArray.map(msg => {
            if (message.match(msg.regex)) {
                returnMsg += msg.message
            }
        });

        return returnMsg
    }
  

exports.getMessage = getMessage;