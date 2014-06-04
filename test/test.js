var assert = require("assert")

describe('Quiz', function(){
    var quiz = require('../lib/questions');

    describe('Quiz Length', function(){
        var pages = 1;
        var quiz_questions = quiz.gen_question_array( 20, pages, true);
        it('should return an array with a multiple of pages * 20', function(){
            assert.equal( 20*pages, quiz_questions.length );
        })
    })
})

