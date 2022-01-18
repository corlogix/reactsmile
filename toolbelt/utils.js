const fs = require('fs'), path = require('path');

function flatten(arr = []) {
    const calcLevel = (next = []) => {
        let count = 0;
        next.forEach(item => {
            if ( Array.isArray(item) ) {
                count++;
                count += calcLevel(item);
            }
        })
        return count;
    }
    const levels = calcLevel(arr);
    return arr.flat(levels);
}

function searchDir(startPath, filter) {
    const result = [];
    const search = (nextPath) => {
        fs.readdirSync(nextPath).forEach(fileName => {
            const filePath = path.join(nextPath, fileName);
            const stat = fs.lstatSync(filePath);
            if(stat.isDirectory()) {
                search(filePath)
            } else if(filter.test(filePath)) {
                result.push(filePath);
            }
        });
        return result;
    }
    console.log(result);
}

searchDir('../packages', /\.scss$/)

// fromDir('../LiteScript',/\.html$/,function(filename){
//     console.log('-- found: ',filename);
// });