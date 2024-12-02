const path = require('path');
const fs = require('fs');

const baseDir = "/path/to/odoo/addons"

const modules = fs.readdirSync(baseDir).filter((dir) => {
    return fs.statSync(path.join(baseDir, dir)).isDirectory();
});

const alias = modules.reduce((acc, module) => {
    acc[`@${module}`] = path.resolve(__dirname, baseDir + `/${module}/static/src/`);
    return acc;
}, {});

module.exports = {
    resolve: {
        alias: alias,
        extensions: ['.js']
    },
};
