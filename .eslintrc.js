module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-named-as-default': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'import/named': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*/setupTests.ts', '**/*.test.ts'] },
    ],
  },
  ignorePatterns: ['serviceWorker.ts'],
};
