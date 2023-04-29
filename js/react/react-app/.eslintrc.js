module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'jsx',
    ],
    rules: {
        'react/jsx-filename-extension': 0,
        'react/react-in-jsx-scope': 0,
        'no-console': 'off',
        semi: 'off',
        indent: 0,
        'class-methods-use-this': 'off',
        'object-curly-newline': 'off',
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'comma-dangle': 'off',
        'react/state-in-constructor': 'off',
        'react/no-unused-state': 'off',
    },
};
