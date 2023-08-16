/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./lib/base")
const react = require("./lib/react")
const prettier = require("./lib/prettier")

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],

  // overrides: [
  //   {
  //     env: {
  //       node: true,
  //     },
  //     files: [".eslintrc.{js,cjs}"],
  //     parserOptions: {
  //       sourceType: "script",
  //     },
  //   },
  // ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },

  plugins: ["@typescript-eslint", "react", "unused-imports"],
  rules: {
    ...base,
    ...react,
    ...prettier,
  },

  settings: {
    react: {
      version: "detect",
    },
  },
}