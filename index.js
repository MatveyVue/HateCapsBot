const { Telegraf } = require('telegraf');
const composer = require('./composer'); // ваш файл с кодом выше

const BOT_TOKEN = '8291475798:AAHMVeNhqwhQKju8dZnYUP3x7LIAu-kldxs';

const bot = new Telegraf(BOT_TOKEN);

// Используем composer
bot.use(composer);

// Запускаем бота
bot.launch()
    .then(() => {
        console.log('🤖 Gjob bot started successfully!');
    })
    .catch((err) => {
        console.error('Error starting bot:', err);
    });

// Включим graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));