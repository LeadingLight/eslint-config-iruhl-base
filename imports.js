const OFF = 0;
const ERROR = 2;

module.exports = {
  rules: {
    'sort-imports': OFF,
    // Static analysis
    'import/no-unresolved': ERROR,
    'import/named': ERROR,
    'import/default': ERROR,
    'import/namespace': [ERROR, { allowComputed: true }],
    'import/no-restricted-paths': OFF,
    'import/no-absolute-path': ERROR,
    'import/no-dynamic-require': ERROR,
    'import/no-internal-modules': OFF,
    'import/no-webpack-loader-syntax': ERROR,

    // Helpful warnings
    'import/export': ERROR,
    'import/no-named-as-default': ERROR,
    'import/no-named-as-default-member': ERROR,
    'import/no-deprecated': ERROR,
    'import/no-extraneous-dependencies': ERROR,
    'import/no-mutable-exports': ERROR,

    // Module systems
    'import/unambiguous': ERROR,
    'import/no-commonjs': ERROR,
    'import/no-amd': ERROR,
    'import/no-nodejs-modules': ERROR,

    // Style guide
    'import/first': ERROR,
    'import/no-duplicates': ERROR,
    'import/no-namespace': OFF,
    'import/extensions': [ERROR, 'never', {}],
    'import/order': [ERROR, {'newlines-between': 'always'}],
    'import/newline-after-import': ERROR,
    'import/prefer-default-export': ERROR,
    'import/max-dependencies': [ERROR, {max: 20}],
    'import/no-unassigned-import': ERROR
  }
};
