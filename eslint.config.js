import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'windows'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'off',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': 'error',
      'space-infix-ops': 'error',
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'brace-style': ['error', '1tbs'],
      'curly': ['error', 'all'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-multi-spaces': 'error'
    },
  },
];
