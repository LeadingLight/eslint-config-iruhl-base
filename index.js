module.exports = {
  rules: {
    // Possible Errors
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {'nestedBinaryExpressions': true}],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'error',
    'valid-typeof': 'error',

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': 'error',
    'consistent-return': 'error',
    'curly': ['error', 'multi-line', 'consistent'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', { 'ignoreArrayIndexes': true }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': ['error', { object: 'require' }],
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: ['error', 'never', { 'exceptRange': true }],

    // Strict Mode
    strict: ['error', 'never'],

    // Variables
    'init-declarations': 'off',
    'no-catch-shadow': 'off', // Not suporting IE8
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',

    // Node.js and CommonJS
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': ['error', '^(err|error|.+Error)$'],
    'no-mixed-requires': ['error', { 'allowCall': true }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'error',

    // Stylistic Issues
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    camelcase: 'error',
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'that'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'always'],
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'id-blacklist': ['error', 'data'],
    'id-length': ['error', { 'exceptions': ['i', 'j', '_'] }],
    'id-match': 'off',
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': ['error', { "position": "above", 'ignorePattern': 'OBS!' }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: true,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: false,
      allowObjectEnd: true,
      allowArrayStart: false,
      allowArrayEnd: false
    }],
    'lines-around-directive': ['error', 'always'],
    'max-depth': ['error', 4],
    'max-len': ['error', { 'code': 120, 'ignoreComments': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true }],
    'max-lines': ['error', {'max': 300, 'skipComments': true, 'skipBlankLines': true, }],
    'max-nested-callbacks': 'error',
    'max-params': 'error',
    'max-statements-per-line': 'error',
    'max-statements': ['error', 10, { 'ignoreTopLevelFunctions': true }],
    'multiline-ternary': ['error', 'never'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error', {'allowSamePrecedence': true}],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'eslint no-restricted-syntax': 'off',
    'no-tabs': 'off',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { 'multiline': true }],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
    'one-var-declaration-per-line': 'off',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed', {'keywords': true, 'numbers': true}],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'require-jsdoc': 'off',
    'semi-spacing': 'error',
    semi: ['error', 'always'],
    'sort-keys': ['error', 'asc', {caseSensitive: false, natural: true}],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'unicode-bom': 'error',
    'wrap-regex': 'error',

    // ECMAScript 6
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {'before': true, 'after': false}],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'off',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error'],
    'sort-imports': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'before']
  }
};
