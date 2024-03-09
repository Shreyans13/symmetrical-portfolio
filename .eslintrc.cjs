module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb-base", "prettier",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    // avoid state param assignment
    'no-param-reassign': ['error', { props: false }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
