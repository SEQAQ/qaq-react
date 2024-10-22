module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['prettier', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    alert: true,
    localStorage: true,
    fetch: true,
    test: true,
    expect: true,
    document: true,
    window: true,
    navigator: true,
    cy: true,
    it: true,
    describe: true,
    context: true,
    beforeEach: true,
    on: true,
    config: true,
  },
  // 1: warn, 2: error
  rules: {
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': 1,
    'block-scoped-var': 2,
    curly: 1,
    eqeqeq: 1,
    'no-global-assign': 2,
    'no-implicit-globals': 2,
    'no-labels': 2,
    'no-multi-str': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'func-call-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 2,
    'lines-around-comment': 0,
    'no-multiple-empty-lines': 2,
    'space-infix-ops': 2,
    'arrow-spacing': 1,
    'no-var': 2,
    'no-unused-vars': 1,
    'prefer-const': 2,
    'no-unsafe-negation': 2,
    'array-callback-return': 2,
    'dot-notation': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-label': 2,
    semi: 'warn',
    'space-before-blocks': 1,
    'space-in-parens': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'arrow-body-style': 1,
    'arrow-parens': 1,
    'no-restricted-imports': 2,
    'no-duplicate-imports': 2,
    'no-useless-computed-key': 2,
    'no-useless-rename': 2,
    'rest-spread-spacing': 2,
    'no-trailing-spaces': 1,
    'no-control-regex': 0,
    'prettier/prettier': 0,
    'no-await-in-loop': 2,
    'require-atomic-updates': 0,
    'no-prototype-builtins': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'simple-import-sort/sort': 'warn',
  },
};
