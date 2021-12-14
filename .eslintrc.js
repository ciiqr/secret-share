module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
};

// TODO: consider extending a common base: https://typescript-eslint.io/docs/linting/linting#community-configs
// TODO: consider: https://typescript-eslint.io/docs/linting/linting#plugins
