# eslint-config-iruhl-base
Base rules for eslint and also rules for react and import plugins

This is by design a really restrictive, picky and opinionated configuration of rules. This is to make the code as deterministic and uniform as possible. It tries to minimize changes in source control tools upon code editing, by trying to eliminate unnecessary code styling changes.

## Common rule complaints
```
'sort-keys': ['error', 'asc', {caseSensitive: false, natural: true}],
```
* This is a rule that most developers want to turn of while some find it helpful for navigation
* Biggest issue is that it is not possible to configure when you have the desire to enforces a logical order for example always have id at the top

## Plugin Versions
Rules have been updated and configured for 
eslint-plugin-react 7.6.1
eslint-plugin-import 2.8.0

## Install

```
npm i eslint-config-iruhl-base --save-dev

```

## Dependencies
```
npm i eslint eslint-plugin-react eslint-plugin-import babel-eslint --save-dev

```
## Default .eslintrc

```
{
  "parser": "babel-eslint",
  "extends": ["iruhl-base", "iruhl-base/imports"],
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "rules": {
    // "linebreak-style": ["error", "windows"],
    // "sort-keys": "off"
  },
  "plugins": [
    "import",
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

# React Native
Extra rules for react native

##Install

```
npm i eslint-plugin-react-native eslint-import-resolver-react-native --save-dev

```

## Native .eslintrc

```
{
  "parser": "babel-eslint",
  "extends": ["iruhl-base", "iruhl-base/imports", "iruhl-base/react-native"],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "rules": {
  },
  "plugins": [
    "import"
    "react",
    "react-native"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "import/resolver": {
      "react-native": { platform: 'ios' }
    }
  }
}
```
