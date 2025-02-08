import pluginJs from '@eslint/js'
import json from '@eslint/json'
import jsonc from 'eslint-plugin-jsonc'
import prettier from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import simpleImport from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  prettier,
  ...jsonc.configs['flat/recommended-with-jsonc'],
  {
    plugins: {
      json,
    },
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
  },
  {
    files: ['**/*.jsonc', '.vscode/*.json'],
    language: 'json/jsonc',
  },
  {
    files: ['**/*.json5'],
    language: 'json/json5',
  },
  {
    plugins: {
      'simple-import-sort': simpleImport,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...pluginJs.configs.recommended,
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...unicorn.configs['flat/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-console': 'error',
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
      'unicorn/no-nested-ternary': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: [/^.*Prop.*$/i, /^.*Param.*$/i, /^.*Ref.*$/i, String.raw`\.e2e$`],
        },
      ],
      'unicorn/no-array-reduce': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variable', 'function'],
          format: null,
          leadingUnderscore: 'allow',
        },
      ],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          ignoreRestArgs: true,
        },
      ],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      '@typescript-eslint/no-non-null-assertion': ['error'],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
        },
      ],
      '@typescript-eslint/no-namespace': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules/*', 'public/*', 'app/assets/*', 'app/paraglide/*', '.vinxi/*', '.output/*', '**/*.gen.ts'],
  },
]
