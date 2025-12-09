import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import prettierConfig from 'eslint-config-prettier'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 1. Archivos Ignorados
  globalIgnores(['dist', 'reports']),

  // 2. Configuración Principal para TypeScript/React
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Extiende solo objetos de configuración plana
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',

      // Configuración de variables globales
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },

      // Configurar el parser de TS
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    // Configuración para el plugin de React
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Reglas de React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  prettierConfig,
])
