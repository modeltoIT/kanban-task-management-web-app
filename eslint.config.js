import js from "@eslint/js";
import tslint from "typescript-eslint";
import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import angularTemplateParser from "@angular-eslint/template-parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // Global config
  js.configs.recommended,

  // TypeScript files
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        Promise: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tslint.plugin,
      "@angular-eslint": angular,
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },
    settings: {},
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],

      "prettier/prettier": "warn",
    },
  },

  // HTML templates
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      "@angular-eslint/template": angularTemplate,
      prettier: prettierPlugin,
    },
    processor: angularTemplate.processors["extract-inline-html"],
    rules: {
      "prettier/prettier": "warn",
    },
  },

  // Ignored files
  {
    ignores: ["node_modules/**/*", "projects/**/*", 'src/index.html'],
  },

  // Prettier base config
  prettierConfig,
];
