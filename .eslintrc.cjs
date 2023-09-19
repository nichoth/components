module.exports = {
    extends: [ 'preact', 'eslint:recommended', 'plugin:@typescript-eslint/recommended' ],
    // ecmaFeatures: {
    //     // modules: true,
    //     // jsx: true,
    //     // experimentalObjectRestSpread: true
    // },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        'prefer-template': ['off'],
        'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1 } ],
        'array-bracket-spacing': ['off'],
        '@typescript-eslint/no-non-null-assertion': 'off',
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        indent: [ 'error', 4, { ignoredNodes: ['TemplateLiteral *'] } ],
        'operator-linebreak': [ 'error', 'after' ]
    }
}
