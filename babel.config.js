module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@routes': './src/routes',
          '@store': './src/store',
          '@mocks': './src/mocks',
          '@models': './src/models',
          '@images': './src/assets/images',
          '@utils': './src/utils',
          '@services': './src/services',
          '@contexts': './src/contexts',
        },
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
      },
    ],
  ],
};
