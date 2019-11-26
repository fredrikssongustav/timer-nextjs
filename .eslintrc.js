
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/react',
    'plugin:import/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      'typescript': {},
    }
  },

  plugins: [
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
    'react',
    'react-hooks',
    'import',
  ],

  rules: {
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    'import/named': 'off',
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/order': ['error', {
      'groups': [
        // Node built-in types e.g. `path` and `fs`.
        'builtin',
        // npm deps e.g. `react` and `styled-components`.
        'external',
        // See https://github.com/benmosher/eslint-plugin-import/issues/1379#issuecomment-527466222.
        ['internal', 'unknown'],
        // Parent imports e.g. '../../foo'.
        'parent',
        // Sibling imports e.g. './foo` and `./bar/baz`.
        'sibling',
      ]
    }],

    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'off', // also want to use "type"
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/array-type': 'on',
    '@typescript-eslint/jsx-key': 'off',
    '@typescript-eslint/no-string-literal': 'off',
    '@typescript-eslint/no-empty': 'on',
    '@typescript-eslint/ordered-imports': 'off',
    '@typescript-eslint/jsx-no-lambda': 'on',
    '@typescript-eslint/no-console': 'on',
    '@typescript-eslint/max-classes-per-file': 'off',
    '@typescript-eslint/member-access': 'off',
    '@typescript-eslint/interface-name': ['on', 'never-prefix'],
    '@typescript-eslint/interface-over-type-literal': 'off',
    '@typescript-eslint/object-literal-sort-keys': 'off',
    'no-unused-vars': 'off', // note you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/display-name': 'off',
    'no-unreachable': 2, // 2 = error

    /**
     * @description rules of eslint-plugin-react
     */
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ], // also want to use with ".tsx"
    'react/prop-types': 'off', // Is this incompatible with TS props type?

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        printWidth: 100,
        trailingComma: 'es5',
      },
    ],
    /**
     * @description rules of eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'error',
  },
};
