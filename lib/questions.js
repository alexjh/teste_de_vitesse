module.exports = {
    gen_question_array: function( number, pages, addition )
      {
        if (addition) {
            return gen_addition_test( number, pages );
        }
        else {
            return gen_subtraction_test( number, pages );
        }
      },
};

var TEST_SIZE = 20;

var gen_addition_test = function( number, pages ) {
    all_questions = [];
    return all_questions;
}

var gen_subtraction_test = function( number, pages ) {
    all_questions = [];
    return all_questions;
}
