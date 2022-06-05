module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2020,
    sourceType:  'module',
  },
  rules:  {
    '@typescript-eslint/no-var-requires': 0,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
