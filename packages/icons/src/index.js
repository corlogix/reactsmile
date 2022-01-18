require("regenerator-runtime/runtime");

const fs = require("fs"), path = require("path");
const generator = require("@vusion/webfonts-generator");
const rimraf = require("rimraf");
const createReactComponent = require("../templates/react-component");


const input = path.resolve("svgs");
const output = path.resolve("styles");
const componentPath = path.join(path.resolve("src"), "index.tsx");
const templates = path.resolve("templates");

console.log({ input, output, templates, componentPath });

function toLower(x = "") {
    return x.toLowerCase();
}

(async () => {

    const clean = () => new Promise(resolve => {
        rimraf.sync(componentPath);
        rimraf.sync(output);
        fs.mkdirSync(output);
        resolve();
    })

    await clean();

    const SVGs = fs.readdirSync(input).map(toLower).filter(x => x.endsWith(".svg"));

    console.log("\nFound", SVGs.length, "SVG files to process");

    generator({
        files: SVGs.map(svg => path.join(input, svg)),
        dest: output,
        html: true,
        fontName: "reactsmile-iconography",
        cssTemplate: path.join(templates, "css.hbs"),
        templateOptions: {
            classPrefix: "rs-",
            baseSelector: ".icon"
        },
        types: ['woff2', 'woff', 'eot', 'ttf', 'svg'],
        normalize: false
    }, function(error, result) {
        if(error) {
            throw Error(error);
        } else {
            result.generateHtml();
            console.log("\nFonts generated!");
        }
    })

    try {
        fs.writeFileSync(componentPath, createReactComponent("rs", SVGs));
        console.log("Typescript file created!")
    } catch(err) {
        throw Error(err);
    }
})();