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
