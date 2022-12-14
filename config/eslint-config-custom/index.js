module.exports = {
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react-hooks/exhaustive-deps': [0],
    'prettier/prettier': ['error', { endOfLine: 'off' }]
  }
};
