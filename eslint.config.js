import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import parserTypeScript from '@typescript-eslint/parser'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import pluginSortKeysFix from 'eslint-plugin-sort-keys-fix'

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': pluginTypeScript,
            'react': eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            'jsx-a11y': eslintPluginJsxA11y,
            'import': eslintPluginImport,
            'unused-imports': eslintPluginUnusedImports,
            'sort-keys-fix': pluginSortKeysFix,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'react/prop-types': 'off',
            'react-hooks/exhaustive-deps': 'warn',
            'import/no-unresolved': 'off',
            'jsx-a11y/anchor-is-valid': 'warn',
            'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: true, natural: false }],
            'import/order': [
                'error',
                {
                    'groups': ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    'alphabetize': {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'pathGroups': [
                        {
                            pattern: 'react|react-dom|react-*',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: './*',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '../*',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '../../*',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '**/*.styles',
                            group: 'index',
                            position: 'after',
                            patternOptions: { matchBase: true },
                        },
                    ],
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
