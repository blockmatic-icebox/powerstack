module.exports = {
  extends: ["turbo", "prettier","next/core-web-vitals", "plugin:tailwindcss/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "turbo/no-undeclared-env-vars": "off",
"tailwindcss/classnames-order": [1, {
  "callees": ["classnames", "clsx", "ctl", "cva", "tv", "cn"]
}]
  },
  plugins: ["tailwindcss"],
  overrides: [
    {
      files: [
        "*.ts",
        "*.tsx"
      ],
      parser: "@typescript-eslint/parser"
    }
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
