module.exports = {
    "extends": [
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/no-explicit-any":0,
        "@typescript-eslint/no-unused-vars":0,
        "@typescript-eslint/explicit-module-boundary-types":0,
        "@typescript-eslint/no-var-requires":0,
        "@typescript-eslint/ban-ts-comment":0,
        "@typescript-eslint/no-transferrable-types":2,
        "@typescript-eslint/no-extra-semi":0,
        "@typescript-eslint/prefer-as-const":1,
        "prefer-const":1
    }
}


