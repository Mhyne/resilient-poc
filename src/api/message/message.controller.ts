const Message = require('../../models/message)
async function saveMessage(params){
    let retryCount = 0;
    const maxRetries = 3;
    try {
        await Message.create(params);
    }catch (e){
        let errors = e.response.data;

        if(retryCount < maxRetries){
            retryCount ++;
            console.log()
            return await saveMessage(params)
        }
        throw errors;
    }
}
