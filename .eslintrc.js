module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'no-empty': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}