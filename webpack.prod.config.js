const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
const miniCSSExtractPlugin=require('mini-css-extract-plugin');
const {VueLoaderPlugin}=require('vue-loader');
module.exports={
    mode:'production',
    entry:'./src/main.js',  
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/index.js'
    },
    devServer:{
        open:true,
        hot:true,
        inline:true
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery'
        }),
        new miniCSSExtractPlugin({
            filename:'css/index.css'
        })
    ],
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options:{
                  // publicPath:'./images',
                  outputPath:'images/'
                }
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader',
              options:{
                // publicPath:'./fonts',
                outputPath:'fonts/'
              }
            },
            {test: /\.css$/,use:[{loader:miniCSSExtractPlugin.loader,
              options:{publicPath: '../'}},'css-loader']},
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader',
              options:{
                // publicPath:'./fonts',
                outputPath:'fonts/'
              }
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader',
              options:{
                // publicPath:'./fonts',
                outputPath:'fonts/'
              }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options:{
                  // publicPath:'./fonts',
                  outputPath:'fonts/'
                }
            },
            {
              test:/\.js$/,exclude:/node_modules/,use:[
                {
                  loader:'babel-loader',
                  options:{
                    presets:['env'],
                    plugins:['transform-runtime']
                  }
                }
              ]
            }
        ]
    },
    resolve:{
        extensions:['.js','.vue','.css'],
        alias:{
            'vue$':'vue/dist/vue.js',
            'jquery$':'jquery/dist/jquery.js',
            'bootstrapCSS$':'bootstrap/dist/css/bootstrap.css',
            'bootstrapJS$':'bootstrap/dist/js/bootstrap.js'
        }
    }
};