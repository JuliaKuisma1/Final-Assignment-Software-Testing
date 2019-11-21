const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Question = require('./question')

/** 
 * startUp function starts all functionalities of application. It calls clear and console log to 
 * output title and user options. Then it calls question module and promptUser.
 */
startUp = () => {
    clear();

    console.log(
        chalk.cyanBright.bgBlue(figlet.textSync('SOFTWARE TESTING', {horizontalLayout: 'full'}))+
        chalk.black('\n')+
        chalk.magentaBright(figlet.textSync('OPTIONS:', {horizontalLayout: 'full'}))+
        chalk.white('\n a - pick a '+chalk.red('c')+chalk.yellow('o')+chalk.green('l')+chalk.cyan('o')
                +chalk.blue('r')+'\n b - favorite sport\n c - close software\n')
    );

    question = new Question();
    question.promptUser();
}

startUp();