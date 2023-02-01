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
        'no-multiple-empty-lines': [
            'error', {
                max: 1,
                maxEOF: 1
            }
        ],
        'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
        indent: [ 'error', 4, { ignoredNodes: ['TemplateLiteral *'] } ],
        'operator-linebreak': [ 'error', 'after' ]
    }
}
