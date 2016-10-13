# eslint-config-iruhl-base
Base rules for eslint

## Install

```
npm i eslint-config-iruhl-base --save-dev

```

## Dependencies
```
npm i eslint eslint-plugin-react babel-eslint --save-dev

```
## Default .eslintrc

```
{
  "parser": "babel-eslint",
  "extends": "iruhl-base",
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "rules": {
  },
  "plugins": [
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
npm i eslint-plugin-react-native --save-dev

```

## Native .eslintrc

```
{
  "parser": "babel-eslint",
  "extends": ["iruhl-base", "iruhl-base/react-native"],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "rules": {
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```
