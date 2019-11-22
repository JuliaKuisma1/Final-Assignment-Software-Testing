/** Readline module @tutorial https://nodejs.org/api/readline.html */
const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');
let colorArray = [ "black", "red", "green", "yellow", "blue", "gray", "magenta", "cyan", "white" ];

/** 
 * Question object constructor. Used to access Question functions.
 * @constructor 
 */
function Question() { };
question = new Question();

/** 
 * promptUser function displays first user question. 
 */
Question.prototype.promptUser = function promptUser() {
    if (typeof rl == "undefined") {
        const rl = question.createReadlineInterface();
    }
    rl.question('Enter your input option (a, b, c): ', answer => {
        if (answer === 'a') {
            question.displayArray(colorArray);
            question.colorQuestion();
        }
        else if (answer === 'b') {
            question.sportQuestion();
        }
        else if (answer === 'c') {
            question.shutDown();
        }
        else {
            question.displayMessage('Please enter input option a, b or c, instead of',answer, 'error');
        }
    });
};

/** 
 * createReadlineInterface creates object rl that is used on user inputs.  
 */
Question.prototype.createReadlineInterface = () => {
    return rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

/** 
 * colorQuestion displays color options to user and waits for answer.
 * Then it calls function validate to check if color is valid.
 */
Question.prototype.colorQuestion = () => {
    rl.question('Pick a color: ', answer => {
        question.validate(answer, colorArray);
    });
};

/** 
 * sportQuestion displays question about sports and waits for user input.
 * Then it calls function displayMessage to display answer and asks first question again. 
 */
Question.prototype.sportQuestion = () => {
    rl.question('Enter your favorite sport: ', (answer) => {
        question.displayMessage('Your favorite sport:', answer);
        question.promptUser();
    });
}

/** 
 * shutDown function displays user message and closes readline interface.
 */
Question.prototype.shutDown = () => {
    console.log(chalk.gray.bold('Shutting down...\n')+chalk.gray(figlet.textSync('ZzZzZz...')));
    rl.close();
};

/** 
 * displayArray adds colors to colorList and displays them with their corresponding colors.
 * @param {array} array - the array of colors
 */
Question.prototype.displayArray = (array) => {
    let colorList, color;
    for (i = 0; i < array.length; i++) {
        if (array[i] == "black") {
            color = array[i];
            colorList = chalk.keyword(color).bgWhite(color) + " ";
        }
        else {
            color = array[i];
            colorList = colorList + chalk.keyword(color)(color) + " ";
        }
    }
    console.log('\n'+colorList+'\n');
};

/**
 * validate function checks that value is included in array. If it is display answer to user
 * and ask first question again. If not then display error message and ask colorQuestion.
 * @param {string} value - user input value
 * @param {array} array - color array 
 */
Question.prototype.validate = (value, array) => {
    if (array.includes(value) === true) {
        console.log('You picked color: '+chalk.keyword(value)(value)+', what a beautiful color!\n');
        question.promptUser();
    }
    else {
        //console.log(chalk.red('Enter correct color!\n'));
        question.displayMessage('Enter correct color, not:',value,'error');
        question.colorQuestion();
    }
};

/**
 * displayMessage displays different messages to user. If an error message, display 
 * will be on red, if other message will be green. Ask first question again.
 * @param {string} message - message that is displayed to user
 * @param {string} value - user's input value
 * @param {string} type - type of message
 */
Question.prototype.displayMessage = (message, value, type) => {
    if(type == 'error') {
        return console.log(chalk.red(message, value + '!\n'));
    }
    else {
        return console.log(chalk.green(message, value + '\n'));
    }
};

module.exports = Question;