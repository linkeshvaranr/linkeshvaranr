const CFonts = require('cfonts');

function printMessage(message) {
    CFonts.say(message, {
        font: 'block', 
        align: 'left',
        colors: ['system'],
        background: 'transparent', 
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
    });
}

// Export the function
module.exports = printMessage;
