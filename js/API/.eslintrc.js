module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {

    'no-console': 'off',
    semi: 'off',
    indent: 0,
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
  },
};
