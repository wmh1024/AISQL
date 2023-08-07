const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 模板文件
            filename: './index.html' // 输出文件
        })
    ]
}