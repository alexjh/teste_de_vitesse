module.exports = {
    gen_html_file: function( questions, number, addition )
      {
        str = "";
        str += gen_html_header();
        str += gen_html_body( questions, number, addition );
        str += gen_html_footer();
        return str;
      }
}

var gen_html_header = function() {
    return "<ul class=\"list-group\">";
}

var gen_html_footer = function() {
    return "</ul>";
}

var gen_html_body = function( questions, number, addition ) {
    str = "";
    for (var i = 0; i < questions.length; i++) {
        str += "<li class=\"list-group-item\">";
        if (addition) {
            str += questions[i][0][0]
              + ' + ' + questions[i][0][1]
              + ' = ___';
        } else {
            str += questions[i][0][0]
              + ' - ' + questions[i][0][1]
              + ' = ___';
        }
        str += "</li>";
    }
    return str;
}
