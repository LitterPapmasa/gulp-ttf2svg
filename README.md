<h1>gulp-ttf2svg </h1>
<h2>Gulp. Convert fonts ttf to svg. </h2>
<p>
  before using you have to install ttf2svg 
  <code>
    #npm install -g ttf2svg
    #npm install --save-dev ttf2svg
  <code>
</p>
<p>
insted of 'assets/fonts/' you have to set your source fonts folder
insted of 'build/fonts/' you have to set your destination fonts folder
</p>
<pre>
<code>
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
</code>
</pre>



