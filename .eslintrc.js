module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
        },
        {
            files: ['*.component.ts'],
            extends: ['plugin:@angular-eslint/template/process-inline-templates'],
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        // my rules
        '@angular-eslint/component-class-suffix': [
            'error',
            {
                suffixes: ['Component', 'Page'],
            },
        ],
        '@angular-eslint/directive-selector': [
            'error',
            {
                type: 'attribute',
                prefix: 'app',
                style: 'camelCase',
            },
        ],
        '@angular-eslint/component-selector': [
            'error',
            {
                type: 'element',
                prefix: 'app',
                style: 'kebab-case',
            },
        ],
        'no-unused-vars': 'off',
        'arrow-parens': ['off', 'always'],
        'comma-dangle': ['off', 'always-multiline'],
        'max-len': [
            'error',
            {
                ignorePattern: '^import .* from .*|// no-max-line',
                code: 180,
            },
        ],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-extra-semi': 'warn',
        'space-in-parens': ['off', 'never'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'local',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'off',
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/semi': ['off', null],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-empty-function': 'off',
    },
}
