module.exports = {
    gen_tex_file: function( questions, number, addition )
      {
        str = "";
        str += gen_tex_header();
        str += gen_tex_body( questions, number, addition );
        str += gen_tex_footer();
        return str;
      }
}

var gen_tex_header = function() {
    str = "";
    str += "\\documentclass[english]{article}\n";
    str += "\\usepackage[T1]{fontenc}\n";
    str += "\\usepackage[latin9]{inputenc}\n";
    str += "\\usepackage[a6paper]{geometry}\n";
    str += "\\geometry{verbose,lmargin=0.01cm,rmargin=0.01cm,tmargin=0.5cm,bmargin=0.5cm}\n";
    str += "\\pagestyle{empty}\n";
    str += "\\setcounter{secnumdepth}{-2}\n";
    str += "\\setcounter{tocdepth}{-2}\n";
    str += "\\usepackage{setspace}\n";
    str += "\\usepackage{draftwatermark}\n";
    str += "\\SetWatermarkText{SAMPLE}\n";
    str += "\\SetWatermarkScale{2}\n";
    str += "\\doublespacing\n";
    str += "\n";
    str += "\\makeatletter\n";
    str += "\n";
    str += "\\providecommand{\\tabularnewline}{\\\\}\n";
    str += "\n";
    str += "\\makeatother\n";
    str += "\n";
    str += "\\usepackage{babel}\n";
    str += "\\begin{document}\n";
    return str;
}

var gen_tex_footer = function() {
    return "\\end{document}\n";
}

var gen_tex_body = function( questions, number, addition ) {
    str = "\\begin{tabular}{lc}\n";

    for (var i = 0; i < questions.length; i++) {
        str += "\\noalign{\\vskip0.4cm}\n";
        if (addition) {
            str0 = questions[i][0][0]
              + '+' + questions[i][0][1]
              + '=';
            i += 1;
            str1 = questions[i][0][0]
              + '+' + questions[i][0][1]
              + '=';
        } else {
            str0 = questions[i][0][0]
              + '-' + questions[i][0][1]
              + '=';
            i += 1;
            str1 = questions[i][0][0]
              + '-' + questions[i][0][1]
              + '=';
        }

        str += "\\textbf{\\huge{}";
        str += "$\\mathsf{" + str0 + "}$ \\rule[-0.3ex]{0.11\\columnwidth}";
        str += "{1pt} } & \\textbf{\\huge{}$\\mathsf{" + str1 + "}$ \\rule[-0.3ex]";
        str += "{0.11\\columnwidth}{1pt}}\\tabularnewline\n";
        if ((i % 20) == 19 ) {
            str += "\\noalign{\\vskip1.0cm}\n";
            str += "\\textbf{\\huge{}$\\mathsf{(";
            str += addition?'+':'-';
            str += ")" + number + "}$} & \\textbf{\\huge{}~~$\\mathsf{/20}$}\\tabularnewline\n";
            if (i != (questions.length - 1)) {
                str += "\\end{tabular}\n";
                str += "\\newpage\n";
                str += "\\begin{tabular}{lc}\n";
            }
        }

    }

    str += "\\end{tabular}\n"

    return str;
}
