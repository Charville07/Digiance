let plugins = [
  [
    'module-resolver',
    {
      root: ['.'],
      extensions: [
        // '.d.ts',
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@components': './src/components',
        '@assets': './src/assets',
        '@screens': './src/screens',
        '@services': './src/services',
        '@stores': './src/stores',
        '@utils': './src/utils',
        '@types': './src/types',
      },
    },
  ],
  'react-native-reanimated/plugin',
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};