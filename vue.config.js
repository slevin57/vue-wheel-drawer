const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    // 修改 src 为 examples
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    // 组件样式内联
    css: {
        extract: false
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('examples'))
            .set('~', resolve('packages'))
        config.module
            .rule('eslint')
            .exclude.add(path.resolve('lib'))
            .end()
            .exclude.add(path.resolve('examples/docs'))
            .end()

        config.module
            .rule('js')
            .include
            .add('/packages/')
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    publicPath: './'
};