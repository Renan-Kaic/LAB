module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],

	overrides: [],

	parser: '@babel/eslint-parser',

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	plugins: ['prettier', 'react', 'react-hooks'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': 'off',
		'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'no-console': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
		'import/no-unresolved': [2, { ignore: ['firebase/app'] }],
	},
}
