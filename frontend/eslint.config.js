// eslint.config.js (frontend)
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser }, // window, document, etc.
    },
    plugins: { "@typescript-eslint": tsPlugin, react, "react-hooks": reactHooks },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      // Regras básicas de Hooks:
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // React 17+ não precisa de React no escopo:
      "react/react-in-jsx-scope": "off",
    },
    settings: { react: { version: "detect" } },
  },
  // Desliga regras que conflitam com o Prettier
  prettierConfig,
];
