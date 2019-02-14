module.exports = {
    webpackConfig: require('react-scripts/config/webpack.config.js'),
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
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
