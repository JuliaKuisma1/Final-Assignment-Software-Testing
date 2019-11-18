const Question = require('./question');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

beforeEach(() => {
    question = new Question();
});

describe('Testing first question with two wrong answer', () => {
    sinon.spy(console, 'log');
    let rl = question.createReadlineInterface();

    it('Give "h" as answer to first question', () => {
        question.promptUser();
        rl.write('h'+'\x0D');
        question.displayMessage('Please enter input option a, b, c or d, instead of','h');
        expect(console.log.calledWith('Please enter input option a, b, c or d, instead of h'));
    });

    it('Give "A" as answer to first question', () => {
        question.promptUser();
        rl.write('A'+'\x0D');
        question.displayMessage('Please enter input option a, b, c or d, instead of','A');
        expect(console.log.calledWith('Please enter input option a, b, c or d, instead of A'));
    });
});

describe('Testing core functionalities', () => {

    it('Give input of lower-case a and yellow as color', () => {
        question.promptUser();
        rl.write('a\x0D');
        question.colorQuestion();
        rl.write('yellow\x0D');
        expect(console.log.calledWith('Your favorite color: yellow, what a beautiful color!\n'));
    });

    it('input of lower-case b and baseball as sport', () => {
        question.promptUser();
        rl.write('b'+'\x0D');
        question.sportQuestion();
        rl.write('baseball'+'\x0D');
        expect(console.log.calledWith('Your favorite sport: baseball'));
    });

    it('input of lower-case c', () => {
        question.promptUser();
        rl.write('c'+'\x0D');
        expect(console.log.calledWith('Shutting down...\nZzZzZz...'))
    });
    
    it('input of lower-case d and display of color array', () => {
        question.promptUser();
        rl.write('d'+'\x0D');
        expect(console.log.calledWith('black, red, green, yellow, blue, gray, magenta, cyan, white'));
    });
});
