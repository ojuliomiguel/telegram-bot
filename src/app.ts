import TelegramBot from 'node-telegram-bot-api';
import {Message} from 'node-telegram-bot-api';


const token: string = '';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg: Message, match: any) => {
    const chatID = msg.chat.id;
    const resp = match[1];
    console.log(resp)
    bot.sendMessage(chatID, resp);
});

bot.on('message', (msg: Message) => {
    const chatId = msg.chat.id;
    console.log(msg.text?.toString());
    
    bot.sendMessage(chatId, 'Ola '+ msg.chat.username  + ' bem-vindo ao playground do bot ps_algumacoisa', {
        "reply_markup": {
            "keyboard": [["Enviar foto", "Ver registros"]] as any
            }
        } )
})