module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/camelcase': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
