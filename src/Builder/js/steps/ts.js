let ts = require("typescript"), path = require('path');

module.exports = function (file) {
    let result = ts.transpileModule(file.content.toString(), {
        compilerOptions: {
            inlineSourceMap: false,
            skipLibCheck: true,
            importHelpers: true,
            target: ts.ScriptTarget.ES5,
            module: ts.ModuleKind.CommonJS,
            moduleResolution: ts.ModuleResolutionKind.NodeJs,
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    });

    // strip the .ts extension
    let dir = path.dirname(file.module);
    let moduleName = (dir !== '.' ? dir + path.sep : '') + path.basename(file.module, path.extname(file.module));

    return {name: file.name, module: moduleName, content: result.outputText};
};
