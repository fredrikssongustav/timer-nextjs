module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    semi: "error",
    "no-console": 1,
  },
  "env": {
    "es6": true,
    "node": true
  },
};
