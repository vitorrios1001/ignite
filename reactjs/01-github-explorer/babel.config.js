module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        // With this, not is necessary import React into .jsx file
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['jsx-control-statements'],
};
