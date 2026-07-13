const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('App', 'https://t.me/HateCapsBot?startapp')],
        [Markup.button.url('Community', 'https://t.me/@hategroups')],
    ]);

    const photoUrl = 'https://github.com/MatveyVue/HateCapsBot/blob/main/HateCaps.jpeg?raw=true';

    return ctx.replyWithPhoto(photoUrl, {
        caption: `Hi, here you can see all the Hate Caps holders and also buy gifts at a low price.`,
        parse_mode: 'HTML',
        reply_markup: buttons.reply_markup,
    });
});

module.exports = composer;
