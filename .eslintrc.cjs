module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*", "node_modules/**/*"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
        "@angular-eslint",
        "prettier"
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module"
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      processor: "@angular-eslint/template/extract-inline-html",
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          { "type": "attribute", "prefix": "app", "style": "camelCase" }
        ],
        "@angular-eslint/component-selector": [
          "error",
          { "type": "element",   "prefix": "app", "style": "kebab-case" }
        ],
      }
    },
    {
      files: ["**/*.html"],
      plugins: ["@angular-eslint/template", "prettier"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
        "plugin:prettier/recommended"
      ],
    }
  ]
};
