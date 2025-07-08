import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier'; // Import the prettier plugin
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    extends: [
      js.configs.recommended, // Equivalent to "eslint:recommended"
      ...tseslint.configs.recommended, // If you're using TypeScript
      pluginReact.configs.recommended, // Equivalent to "plugin:react/recommended"
      prettierRecommended // Equivalent to "plugin:prettier/recommended"
    ],
    plugins: {
      react: pluginReact, // Define react plugin
      prettier: prettier // Define prettier plugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Your custom rule
      'prettier/prettier': 'error' // Your custom rule
    },
    settings: {
      react: {
        version: 'detect' // Equivalent to "version": "detect"
      }
    }
  }
]);
