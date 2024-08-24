const prettierConfig = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

module.exports = {
  root: true,
  extends: ['tonyfromundefined'],
  rules: {
    'prettier/prettier': ['error', prettierConfig, { usePrettierrc: false }],
    semi: ['error', 'never'],
    // '@typescript-eslint/semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
  },
}
