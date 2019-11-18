const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Question = require('./question')

// clear console on start
clear();

console.log(
    chalk.cyanBright.bgBlue(figlet.textSync('SOFTWARE TESTING', {horizontalLayout: 'full'}))+
    chalk.black('\n')+
    chalk.magentaBright(figlet.textSync('OPTIONS:', {horizontalLayout: 'full'}))+
    chalk.white(
        '\n a - favorite '+chalk.red('c')+chalk.yellow('o')+chalk.green('l')+chalk.cyan('o')
        +chalk.blue('r')+'\n b - favorite sport\n c - close software\n d - display color options\n'
    )
);

question = new Question();
question.promptUser();