/**
 * @file Console Application main function that lanches app. 
 * @author Julia Kuisma <julia.kuisma@student.lamk.fi>
 */

/** chalk library @tutorial https://github.com/chalk/chalk */
const chalk = require('chalk');
/** figlet library @tutorial https://github.com/patorjk/figlet.js#readme */
const figlet = require('figlet');
/** clear library @tutorial https://github.com/bahamas10/node-clear#readme*/
const clear = require('clear');
/**
 * @file Console Application, Question module, that runs question logic. 
 * @author Julia Kuisma <julia.kuisma@student.lamk.fi>
 */
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
};

startUp();