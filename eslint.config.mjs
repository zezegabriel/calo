// Fast lint tier, copiado de vibe-coding-toolkit/templates/eslint/eslint.config.mjs.example
// e adaptado ao Calo (Expo + React Native + TypeScript):
//   - camada de apresentação: src/app (telas do expo-router) e src/components
//   - módulo de dados: src/store/armazenamento.ts, o único que importa o AsyncStorage
//   - log adapter: src/lib/log.ts
//   - sem bloco import-x: o projeto ainda não tem camadas além de tela / dados,
//     e o limite que importa (tela não toca no AsyncStorage) já é coberto por
//     quality/no-direct-data-access.
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

import quality from "./eslint-rules/index.cjs";

const testFiles = [
  "**/*{.,-}{test,spec}.{js,jsx,ts,tsx,mjs,cjs,mts,cts}",
  "**/{__tests__,__mocks__,fixtures,mocks}/**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}",
];

export default defineConfig([
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
      // O que o runtime do React Native realmente oferece.
      globals: {
        console: "readonly",
        require: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        __DEV__: "readonly",
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,

  {
    // Subconjunto escolhido do react-hooks, no lugar do preset inteiro.
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  {
    files: ["src/**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}"],
    plugins: { quality },
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-var": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      complexity: ["warn", 12],
      "max-depth": ["warn", 4],
      "max-statements": ["warn", 20],
      "max-params": ["warn", 4],
      "max-lines-per-function": [
        "warn",
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      "max-nested-callbacks": ["warn", 3],
      "quality/max-lines": ["error", { max: 350 }],
      "quality/no-direct-console": [
        "error",
        { logger: "src/lib/log.ts" },
      ],
      "quality/no-direct-data-access": [
        "error",
        {
          modules: ["@react-native-async-storage/async-storage"],
          bindings: ["AsyncStorage"],
          layers: ["/src/app/", "/src/components/"],
          extensions: [".tsx"],
        },
      ],
    },
  },
  {
    // O log adapter. Vem DEPOIS do bloco que liga a regra, senão o "off" é sobrescrito.
    files: ["src/lib/log.ts"],
    rules: {
      "quality/no-direct-console": "off",
    },
  },
  {
    files: testFiles,
    plugins: { quality },
    rules: {
      "quality/max-lines": ["warn", { includeTests: true }],
    },
  },
  {
    files: testFiles,
    rules: {
      "max-statements": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "off",
    },
  },
  {
    files: ["eslint-rules/**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { module: "readonly", require: "readonly" },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    // Imagens e sons entram com require(), como o Metro pede, só neste arquivo.
    files: ["src/lib/midia.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  globalIgnores([
    ".claude/**",
    ".expo/**",
    "node_modules/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "android/**",
    "ios/**",
    "**/*.tsbuildinfo",
    "package-lock.json",
  ]),
]);
