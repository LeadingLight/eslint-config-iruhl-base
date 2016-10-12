const ERROR = 2;

module.exports = {
  rules: {
    'react-native/no-unused-styles': ERROR,
    'react-native/split-platform-components': ERROR,
    'react-native/no-inline-styles': ERROR,
    'react-native/no-color-literals': ERROR,
    
    // React
    'react/forbid-component-props': [ERROR, {"forbid": ['className']}]
  }
};
