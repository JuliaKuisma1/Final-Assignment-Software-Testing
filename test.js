const Question = require('./question');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
// required variables
const ENTER = '\x0D';
let colorArray = [ "black", "red", "green", "yellow", "blue", "gray", "magenta", "cyan", "white" ];

describe('Start of the program', () => {
    beforeEach(() => {
        question = new Question();
        let rl = question.createReadlineInterface();
    });
    afterEach(() => {
        rl.close();
    });

    describe('Testing first question', () => {
        it('Give "a" as answer to first question and check if array is called.', () => {
            sinon.spy(question, 'displayArray');
            // Simulate user prompts using lower-case a.
            question.promptUser();
            rl.write('a'+ENTER);
            expect((question.displayArray)
                .calledWith(colorArray)).to.be.ok;
        });
    
        it('Give "a" as answer to first question and check if colorQuestion is called', () => {
            sinon.spy(question, 'colorQuestion');
            // Simulate user prompts using lower-case a.
            question.promptUser();
            rl.write('a'+ENTER);
            expect((question.colorQuestion)
                .calledOnce).to.be.ok;
        });
    
        it('Give "b" as answer to first question and check if sportQuestion is called.', () => {
            sinon.spy(question, 'sportQuestion');
            // Simulate user prompts using lower-case b.
            question.promptUser();
            rl.write('b'+ENTER);
            expect((question.sportQuestion)
                .calledOnce).to.be.ok;
        });
    
        it('Give "c" as answer to first question and check if shutDown is called.', () => {
            sinon.spy(question, 'shutDown');
            // Simulate user prompts using lower-case c.
            question.promptUser();
            rl.write('c'+ENTER);
            expect((question.shutDown)
                .calledOnce).to.be.ok;
        });
    
        it('Give "h" as answer to first question', () => {
            sinon.spy(question, 'displayMessage');
            // Simulate user prompts using lowercase h.
            question.promptUser();
            rl.write('h'+ENTER);
            expect((question.displayMessage)
                .calledWith('Please enter input option a, b or c, instead of','h','error'))
                .to.be.ok;
        });
    
        it('Give "A" as answer to first question', () => {
            sinon.spy(question, 'displayMessage');
            // Simulate user prompts using upper-case A.
            question.promptUser();
            rl.write('A'+ENTER);
            expect((question.displayMessage)
                .calledWith('Please enter input option a, b or c, instead of','A','error'))
                .to.be.ok;
        });
    });
    
    describe('Testing core functionalities: pick a color, sport question and shutdown', () => {
    
        it('Test color question with parameter yellow', () => {
            sinon.spy(question, 'validate');
            // Test if colorQuestion calls validate with correct parameters. 
            question.colorQuestion();
            rl.write('yellow\x0D');
            rl.close();
            expect((question.validate).calledWith('yellow', colorArray)).to.be.ok;
        });

        it('Test color question with parameter yelllow', () => {
            sinon.spy(question, 'displayMessage');
            // Test if colorQuestion calls validate with correct parameters. 
            question.colorQuestion();
            rl.write('yelllow\x0D');
            rl.close();
            expect((question.displayMessage).calledWith('Enter correct color, not:','yelllow','error')).to.be.ok;
        });
    
        it('Test sport question with parameter baseball', () => {
            sinon.spy(question, 'displayMessage');
            // Test if sportQuestion calls displayMessage with correct parameters. 
            question.sportQuestion();
            rl.write('baseball'+'\x0D');
            expect((question.displayMessage).calledWith('Your favorite sport:', 'baseball')).to.be.ok;
        });
    
        it('Test shutdown function', () => {
            sinon.spy(question, 'shutDown');
            // Test if shutDown function is called.
            question.promptUser();
            rl.write('c'+ENTER);
            expect((question.shutDown).calledOnce).to.be.ok;
        });
    });
});
