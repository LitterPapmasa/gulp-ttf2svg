//npm install --save-dev ttf2svg
var ttf2svg = require('ttf2svg'),
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
