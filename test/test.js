var assert = require("assert")

describe('Quiz', function(){
    var quiz = require('../lib/questions');
    var min_target_number = 5;
    var max_target_number = 99;
    var pages = 1;

    describe('Length', function(){
        var quiz_questions = quiz.gen_question_array( 10, pages, true);
        it('should return an array with a multiple of pages * 20', function(){
            assert.equal( 20*pages, quiz_questions.length );
        })
    })

    // Check if answers are correct
    describe('Correct answers', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should return correct answers', function(){
                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    assert.equal(   quiz_questions[j][0][0]
                                 + quiz_questions[j][0][1],
                                 quiz_questions[j][1] );
                }
            })
        }
    })

    // One or two questions that have 0 as an operand
    describe('adding zeroes', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should have one or two questions with 0 as an operand', function(){
                var num_zero = 0;

                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    if ( quiz_questions[j][0][0] == 0 || quiz_questions[j][0][1] == 0 ) {
                        num_zero++;
                    }
                }

                assert.ok( num_zero == 1 || num_zero == 2 );
            })
        }
    })

    // 7 - 10 questions that are equal to the target number
    describe('', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should have one or two questions with 0 as an operand', function(){
                var num_target = 0;

                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    if ( quiz_questions[j][1] == i ) {
                        num_target++;
                    }
                }

                assert.ok( num_target > 6 && num_target < 11 );
            })
        }
    })

    // No answers greater than the target
    describe('', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should never have an answer greater than the target', function(){
                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    assert.ok( quiz_questions[j][1] >= i );
                }
            })
        }
    })



    // Subtraction:
    // Quiz length
    describe('Length', function(){
        var quiz_questions = quiz.gen_question_array( 10, pages, false);
        it('should return an array with a multiple of pages * 20', function(){
            assert.equal( 20*pages, quiz_questions.length );
        })
    })

    // Check if answers are correct
    describe('', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should return correct answers', function(){
                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    assert.equal(   quiz_questions[j][0][0]
                                  - quiz_questions[j][0][1],
                                 quiz_questions[j][1] )
                }
            })
        }
    })

    // Ensure that there are 2 - 4 questions that have 0 for the answer
    describe('', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should have 2 - 4 questions that = 0', function(){
                var num_zero = 0;

                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    if ( quiz_questions[j][1] == 0 ) {
                        num_zero++;
                    }
                }

                assert.ok( num_zero > 1 && num_zero < 5 );
            })
        }
    })

    // 6 - 8 questions that have the target as the first operand
    describe('', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should have 6 - 8 questions with the target number as the first operand', function(){
                var num_target = 0;

                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    if ( quiz_questions[j][0][0] == i ) {
                        num_target++;
                    }
                }

                assert.ok( num_target > 5 && num_target < 9 );
            })
        }
    })

    // Ensure all answers are >= 0
    describe('', function(){
        for (var i = min_target_number; i <= max_target_number; i++) {
            var quiz_questions = quiz.gen_question_array( i, pages, true);
            it('should have answers >= 0', function(){
                for ( var j = 0; j < quiz_questions.length; j++ ) {
                    assert.ok( quiz_questions[j][1] >= 0 );
                }

            })
        }
    })

})

