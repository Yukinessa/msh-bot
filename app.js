const TelegreamBot = require('telegram-bot-nova');
const env = require('./modules/env.jsx');
const ErrorHandler = require('./controller/err.jsx');
const { JoinHandler, LeaveHandler } = require('./controller/join.jsx');
const { Ngejek } = require('./controller/chat.jsx');

var bot = new TelegreamBot(env.token);

bot.on('groupJoin', (chat, date, joiningUser, messageId, triggeringUser) => {
    ErrorHandler(chat.id);
    bot.sendText(
        chat.id,
        JoinHandler(joiningUser.username)
    );return
})

bot.on('groupLeft', (chat, date, leavingUser, messageId, triggeringUser) => {
    ErrorHandler(chat.id);
    bot.sendText(
        chat.id,
        LeaveHandler(leavingUser.username)
    );return
})

bot.on('text', (chat, date, from, messageId, text) => {
    if(Ngejek(text)) {
        bot.sendText(
            chat.id,
            `Ih ${from.first_name} omongan-nya jorok!`
        )
    } else if(Number(text)){
        bot.sendText(
            chat.id,
            `ini nomor`
        )
    } else if (text=='halo') {
        bot.sendText(
            chat.id,
            'Hello, ' + from.first_name + '.'
        )
    } else if (text=='jancok') {
        bot.sendText(
            chat.id,
            `Apaan sih lo ${from.first_name}`
        )
    } else {
        bot.sendText(
            chat.id,
            `Ngomong apaan sih loe!`
        )
    }
})
