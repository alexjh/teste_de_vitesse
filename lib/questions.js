module.exports = {
    /*
     * Returns a multi-dimensional array in the following format:
     *
     * questions[i][0][0] = first operand
     * questions[i][0][1] = second operand
     * questions[i][1] = result
     *
     */
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

var random_int = function( min, max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Takes an array and a target, returns true if the target
// is in the array already.
var is_duplicate = function( source, target ) {
    var i = source.length;
    while(i--) {
        if (   source[i][0][0] === target[0][0]
            && source[i][0][1] === target[0][1]
            && source[i][1] === target[1] ) {
                // console.log("dupe! " + target );
                return true;
            }
    }

    return false;
};

function knuthfisheryates(arr) {
    var i, temp, j, len = arr.length;
    for (i = 0; i < len; i++) {
        j = ~~(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

var gen_addition_test = function( number, pages ) {

    var all_questions = [];

    while(pages--) {

        // one question that is number + 0 = number
        var questions = [[[number,0], number]];

        // possibly one question that is 0 + number = number
        if ( Math.round(Math.random()) ) {
            questions.push([[0,number], number]);
        }

        // 5 - 7 questions that sum to number
        var target = random_int( 5, 7 ) + questions.length;
        var attempts = 0;
        while( questions.length < target && attempts < 200 ) {
            first = random_int( 1, number - 1 );
            question = [[first, number - first], number];

            if ( number <= 8 || !is_duplicate( questions, question ) ) {
                questions.push(question);
            }
            else {
                attempts++;
            }
        }

        // remaining questions that are randomly generated from
        //   first = 1 to (number - 1)
        //   second = 1 to (number - first)

        attempts = 0;
        while( questions.length < TEST_SIZE && attempts < 200 ) {
            first = random_int( 1, number - 1 );
            second = random_int( 1, number - first - 1 );

            question = [[first, second], first + second];

            if ( number <= 8 || !is_duplicate( questions, question ) ) {
                questions.push(question);
            }
            else {
                attempts++;
            }
        }

        all_questions = all_questions.concat(questions);

    }

    return knuthfisheryates(all_questions);
};

var gen_subtraction_test = function( number, pages ) {

    var all_questions = [];

    while(pages--) {

        // one question that is number - number = 0
        var questions = [[[number,number], 0]];

        // 1 - 3 questions that = 0
        var target = random_int( 1, 3 ) + questions.length;
        var attempts = 0;
        while( questions.length < target && attempts < 200 ) {
            var first = random_int( 1, number - 1 );
            var question = [[first, first], 0];

            if ( number <= 8 || !is_duplicate( questions, question ) ) {
                questions.push(question);
            }
            else {
                attempts++;
            }
        }

        target = random_int( 5, 7 ) + questions.length;
        attempts = 0;
        while( questions.length < target && attempts < 200 ) {
            var second = random_int( 1, number - 1 );
            var question = [[number, second], number - second];

            if ( number <= 8 || !is_duplicate( questions, question ) ) {
                questions.push(question);
            }
            else {
                attempts++;
            }
        }

        // remaining questions that are randomly generated from
        //   first = 1 to (number - 1)
        //   second = 1 to (number - first)

        attempts = 0;
        while( (questions.length < TEST_SIZE) && (attempts < 200) ) {
            var first = random_int( 1, number - 1 );
            var second = random_int( 1, number - first - 1 );

            if ( first - second <= 0 ) {
                continue;
            }

            var question = [[first, second], first - second];

            if ( number <= 8 || !is_duplicate( questions, question ) ) {
                questions.push(question);
            }
            else {
                attempts++;
            }
        }

        all_questions = all_questions.concat(questions);
    }

    return knuthfisheryates(all_questions);
};
