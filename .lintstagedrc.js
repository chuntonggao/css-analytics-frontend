module.exports = {
    './src/**/*.ts': [
        'prettier --config ./.prettierrc.json --check',
        'eslint --no-error-on-unmatched-pattern'
    ],
    './src/**/*.tsx': [
        'prettier --config ./.prettierrc.json --check',
        'eslint --no-error-on-unmatched-pattern'
    ],
    './src/**/*.mdx': [
        'prettier --config ./.prettierrc.json --check'
    ]
};
