const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// kuhu fuck ma selle htmlPlugins topin bruh
//let htmlPlugins = glob.sync('./src/views/*').map(templatePath =>{
//    return new HtmlWebpackPlugin({
//        template: templatePath,
//        filename: path.parse(templatePath).base,
//    });
//});


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'Some title',
            template: './src/views/index.html',
        }),
        new HtmlWebpackPlugin({ 
            title: 'Some title',
            filename: 'about.html',
            template: './src/views/index.html',
        }),
        new HtmlWebpackPlugin({ 
            title: 'Some title',
            filename: 'contacts.html',
            template: './src/views/index.html',
        })
    ],
};