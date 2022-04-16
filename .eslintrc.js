const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Errors
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,

    // Warnings
    'no-unused-vars': RULES.WARN,
    'no-empty': RULES.WARN,
  },
};
