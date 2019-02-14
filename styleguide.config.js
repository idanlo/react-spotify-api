module.exports = {
    webpackConfig: require('react-scripts/config/webpack.config.js'),
    sections: [
        {
            name: 'Artist components',
            components: 'src/lib/Artist/*.js',
            ignore: 'src/lib/Artist/index.js',
            exampleMode: 'hide'
            // content: 'src/docs/Artist.md'
        }
    ]
};
