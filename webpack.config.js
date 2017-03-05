const path = require( 'path' )

const HtmlWebpackPlugin = require('html-webpack-plugin')

const base_path = path.resolve(__dirname, 'src')

const isProd = process.env.NODE_ENV === 'production'


let config = {
    entry: {
        app: path.join(__dirname, 'src', 'main.js'),
        vendor: Object.keys(require('./package').dependencies)
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        alias:{
            _components: path.join(base_path, 'components'),
            _services: path.join(base_path, 'services'),
            _vuex: path.join(base_path, 'store')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 4 versions', 'IE 10']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: isProd ? '../index.html' : 'index.html',
            template: 'template.html'
        })
    ]
}

if (isProd) {
    config.output.filename = '[name].[chunkhash].js'
}



module.exports = config
