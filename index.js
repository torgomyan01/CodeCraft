const fs = require("fs");

const UglifyJs = require('uglify-js');

const code = {
    "bootstrap.bundle.min.js": fs.readFileSync('src/js/bootstrap.bundle.min.js','utf8'),
    "jquery.min.js": fs.readFileSync('src/js/jquery.min.js','utf8'),
    "fastfront.js": fs.readFileSync('src/js/fastfront.js','utf8'),
    "script.js": fs.readFileSync('src/js/script.js','utf8'),
};

const result = UglifyJs.minify(code)

fs.writeFile("src/js/main.js",result.code,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("File was successfully saved")
    }
})
