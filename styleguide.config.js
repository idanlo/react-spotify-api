module.exports = {
    webpackConfig: require('react-scripts/config/webpack.config.js')(
        'development'
    ),
    // components: 'src/lib/**/*.js'
    sections: [
        {
            name: 'Artist components',
            components: 'src/lib/Artist/*.js',
            ignore: ['src/lib/Artist/index.js', 'src/lib/Artist/useArtist.js'],
            exampleMode: 'collapse'
        },
        {
            name: 'Track components',
            components: 'src/lib/Track/*.js',
            ignore: ['src/lib/Track/index.js', 'src/lib/Track/useTrack.js'],
            exampleMode: 'collapse'
        },
        {
            name: 'Album components',
            components: 'src/lib/Album/*.js',
            ignore: ['src/lib/Album/index.js'],
            exampleMode: 'collapse'
        }
    ]
};
