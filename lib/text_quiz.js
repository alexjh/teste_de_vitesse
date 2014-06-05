var questions = require('../lib/questions');

items = questions.gen_question_array( 20, 2, true );
console.log( items );
items = questions.gen_question_array( 20, 2, false );
console.log( items );

header = "foo\n";
header += "bar\n";

console.log(header);
