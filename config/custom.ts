import { IProjectConfig } from '@tarojs/taro/types/compile'

module.exports = {
    outputRoot: 'snippets/dist',
    copy: {
        patterns: (process.env.NODE_ENV === 'development'
            ? ['project.config.json']
            : [
                  'config/dev.ts',
                  'config/index.ts',
                  'config/prod.ts',
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
} as IProjectConfig
