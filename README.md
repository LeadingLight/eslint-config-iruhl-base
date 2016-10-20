# eslint-config-iruhl-base
Base rules for eslint and also rules for react and import plugins

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
    "mocha": true,
    "node": true
  },
  "rules": {
  },
  "plugins": [
    "import"
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
