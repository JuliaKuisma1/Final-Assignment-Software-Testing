const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

let colorArray = [ "black", "red", "green", "yellow", "blue", "gray", "magenta", "cyan", "white" ];

function Question() { };

question = new Question();

Question.prototype.promptUser = function promptUser() {
    const rl = question.createReadlineInterface();
    rl.question('Enter your input option (a, b, c, d): ', answer => {
        if (answer === 'a') {
            question.colorQuestion();
        }
        else if (answer === 'b') {
            question.sportQuestion();
        }
        else if (answer === 'c') {
            question.shutDown();
        }
        else if (answer === 'd') {
            question.displayArray(colorArray);
        }
        else {
            question.displayMessage('Please enter input option a, b, c or d, instead of ',answer);
        }
    });
};

Question.prototype.createReadlineInterface = () => {
    return rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

Question.prototype.colorQuestion = () => {
    rl.question('Enter your favorite color: ', answer => {
        question.validate(answer, colorArray);
    });
};

Question.prototype.sportQuestion = () => {
    rl.question('Enter your favorite sport: ', (answer) => {
        question.displayMessage('Your favorite sport:', answer);
    });
}

Question.prototype.shutDown = () => {
    console.log(
        chalk.gray.bold('Shutting down...\n')+chalk.gray(figlet.textSync('ZzZzZz...'))
    );
    rl.close();
};

Question.prototype.displayArray = (array) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] === "black") {
            console.log(chalk.black.bgWhite("black"));
        }
        else {
            console.log(chalk.keyword(array[i])(array[i]));
        }
    }
    rl.close();
};


Question.prototype.validate = (value, array) => {
    if (array.includes(value) === true) {
        console.log('Your favorite color: '+
                chalk.keyword(value)(value)+
                ', what a beautiful color!\n');
    }
    else {
        console.log(chalk.red('Please enter correct color!\n'));
    }
    rl.close();
};

Question.prototype.displayMessage = (message, value) => {
    console.log(message, value + '\n');
    rl.close();
};

module.exports = Question;