//gulp-ttf2svg
//gulp. Convert fonts ttf to svg.

//npm install --save-dev ttf2svg
//insted of 'assets/fonts/' you have to set your source fonts folder
//insted of 'build/fonts/' you have to set your destination fonts folder

var gulp = require('gulp'),
    ttf2svg = require('ttf2svg'),
    fs = require('fs');

gulp.task('ttf2svg', function(){
    var filesArr = fs.readdirSync('assets/fonts/');
    filesArr.forEach(function(font) {
        if (font.slice(-3) === 'ttf') {
            fs.readFile('assets/fonts/' + font, function (err, buffer){
                if (!!err) throw err;

                var svgContent = ttf2svg(buffer);
                fs.writeFileSync('build/fonts/'+ font.slice(0, -3) + "svg", svgContent);
            });
        }
    });
});

