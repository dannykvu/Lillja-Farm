module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,           // no separate .babelrc needed
    babelOptions: {
      presets: ["next/babel"],          // use Next.js’ Babel settings
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  extends: [
    "next/core-web-vitals",             // Next.js recommended
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // your overrides…
  },
};
