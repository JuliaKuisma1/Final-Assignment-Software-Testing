var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

const Question = require('./question');
const readline = require('readline');

let colorArray = [ "black", "red", "green", "yellow", "blue",
                "gray", "magenta", "cyan", "white" ];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

describe('Tests for console application', () => {
    sinon.spy(console, 'log');
    question = new Question();

    describe('Testing first question with wrong answer', () => {
        it('given wrong option', () => {
            question.promptUser();
            rl.write('h'+'\x0D');
            question.displayMessage('Please enter input option a, b, c or d, instead of','h');
            expect(console.log.calledWith('Please enter input option a, b, c or d, instead of h'));
        });

        it('given option in upper-case', () => {
            question.promptUser();
            rl.write('A'+'\x0D');
            question.displayMessage('Please enter input option a, b, c or d, instead of','A');
            expect(console.log.calledWith('Please enter input option a, b, c or d, instead of A'));
        });
    });

    describe('Testing core functionalities', () => {
        it('input of lower-case a and yellow as color', () => {
            question.promptUser();
            rl.write('a'+'\x0D');
            question.colorQuestion();
            rl.write('yellow'+'\x0D');
            question.validate('yellow', colorArray);
            expect(console.log.calledWith('Your favorite color: yellow, what a beautiful color!\n'));
        });

        it('input of lower-case b and baseball as sport', () => {
            question.promptUser();
            rl.write('b'+'\x0D');
            question.sportQuestion();
            rl.write('baseball'+'\x0D');
            question.displayMessage('Your favorite sport:', 'baseball')
            expect(console.log.calledWith('Your favorite sport: baseball'));
        });

        it('input of lower-case c', () => {
            question.promptUser();
            rl.write('c'+'\x0D');
            question.shutDown();
            expect(console.log.calledWith('Shutting down...\nZzZzZz...'))
        });
        
        it('input of lower-case d and display of color array', () => {
            question.promptUser();
            rl.write('d'+'\x0D');
            question.displayArray(colorArray);
            expect(console.log.calledWith('black, red, green, yellow, blue, gray, magenta, cyan, white'));
        });
    });
});
