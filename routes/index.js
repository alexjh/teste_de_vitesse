var express = require('express');
var router = express.Router();
var quiz = require('../lib/questions');
var quiz_render = require('../lib/html_gen');
var tex_render = require('../lib/tex_gen');
var latex = require("gammalatex");
var fs = require('fs');
var rimraf = require('rimraf');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Teste de Vitesse' });
});


router.post('/gen_quiz', function(req, res) {
    var pages = parseInt(req.body.pages);
    var number = parseInt(req.body.number);

    var addition = true;

    if ( req.body.sub ) {
        addition = false;
    }

    var quiz_questions = quiz.gen_question_array( number, pages, addition);
    var tex_file = tex_render.gen_tex_file( quiz_questions, number, addition );

    console.log(quiz_questions);

    latex.setPostParseHook(function(params, cb){
        res.sendfile(params.outputFilePath, function(err) {
            rimraf(params.outputDirectory, function(err){
                if(err) throw err;
            });
        });
        cb();
    });

    latex.parse(tex_file, function(err, readStream){
        if (err) throw err;
    });
});

module.exports = router;
