const fs = require('fs'), path = require('path'), glob = require('glob');
const rimraf = require('rimraf');

const [ packageName ] = process.argv.splice(2);

if(!packageName) {
    throw Error("No package name provided")
}

const packagePath = path.resolve(`packages/${packageName}`);
const stylePath = path.join(`${packagePath}/styles`);
console.log({packageName, packagePath });

if(!fs.existsSync(stylePath)) {
    fs.mkdir(stylePath);
} else {
    rimraf(stylePath, {}, () => {
        fs.mkdir(stylePath);
    });
}

const findAllSassFiles = () => {
    console.log(`${packagePath}\\src\\**\\*.scss`)
    glob(`./**/*.scss`, {
        root: packagePath,
        absolute: true
    }, (err, files)=>{
        console.log(files)
    })
}
findAllSassFiles();