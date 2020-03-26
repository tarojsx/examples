module.exports = {
    outputRoot: 'snippets/dist',
    copy: {
        patterns: (process.env.NODE_ENV === 'development'
            ? ['project.config.json']
            : [
                  'config/dev.js',
                  'config/index.js',
                  'config/prod.js',
                  'src',
                  'babel.config.js',
                  'package.json',
                  'project.config.json',
                  'tsconfig.json',
              ]
        ).map(from => ({
            from,
            to: `snippets/${from}`,
        })),
    },
}
