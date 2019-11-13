const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

clear();

console.log(
    chalk.cyanBright.bgBlue(
        figlet.textSync('SOFTWARE TESTING', {horizontalLayout: 'full'})
    )
);

console.log(
    chalk.magentaBright(
        figlet.textSync('Options:')
    )
);

console.log(
    chalk.white(
        '\n a - favorite '+chalk.red('c')+chalk.yellow('o')+chalk.green('l')+chalk.cyan('o')
        +chalk.blue('r')+'\n b - favorite sport\n c - close software\n'
    )
);

async function run() {
    inquirer.prompt([
        {
            name: 'option',
            type: 'input',
            message: 'Enter your input option (a, b, c):',
            validate: (value) => {
                if (value.length) {
                    return true;
                }
                else {
                    return 'Please enter input option a, b or c.';
                }
            }
        }
    ]).then((answer) => {
        if (answer.option === 'a') {
            inquirer.prompt([
                {
                    name: 'color',
                    type: 'input',
                    message: 'Enter your favorite color:',
                    validate: (value) => {
                        let colorArray = [ "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white" ];
                        if (colorArray.includes(value) === true) {
                            return true;
                        }
                        else {
                            return 'Please enter correct color!';
                        }
                    }
                }
            ]).then((answer) => {
                console.log('Your favorite color: '+
                    chalk.keyword(answer.color).bold(answer.color)+
                    ', what a beautiful color!\n');
                run();
            });
        }
        else if (answer.option === 'b') {
            inquirer.prompt([
                {
                    name: 'sport',
                    type: 'input',
                    message: 'Enter your favorite sport:',
                    validate: (value) => {
                        if (value.length) {
                            return true;
                        }
                        else {
                            return 'Please enter your favorite sport';
                        }
                    }
                }
            ]).then((answer) => {
                console.log('Your favorite sport: '+answer.sport+'\n');
                run();
            });
        }
        else if (answer.option === 'c') {
            console.log(
                chalk.gray.bold('Shutting down...')
            );
            console.log(
                chalk.gray(
                    figlet.textSync('ZzZzZz...')
                )
            );
        }
        
    });
}

run();
