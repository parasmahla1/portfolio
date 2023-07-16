/* eslint-env node */

module.exports = {
  env: {
    browser: true, es2020: true,              EMAIL_JS_TEMPLATE_ID :"",
      EMAIL_JS_SERVICE_ID : "",
      EMAIL_JS_PUBLIC_KEY :"" },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
