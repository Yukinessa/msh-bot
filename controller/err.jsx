module.exports = {
    ErrorHandler: (chat_id)=> {
        bot.sendAction(chat_id, 'typing', (err)=> {
            if (err) return err;
        })
    }
}
