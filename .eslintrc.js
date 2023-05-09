module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'import-helpers',
  ],
  rules: {
    'prettier/prettier': 'off',
    // 'prettier/prettier': ['error', { tabWidth: 2 }],
    '@typescript-eslint/indent': 'off',
    quotes: ['error', 'single', {avoidEscape: true}],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    semi: ['error', 'always'],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          // ['/^react/', '/^@react/'],
          'module',
          ['/^@components/', '/^@screens/', '/^@routes/', '/^@store/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {order: 'ignore', ignoreCase: true},
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
