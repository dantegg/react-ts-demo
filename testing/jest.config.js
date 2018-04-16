module.exports = {
    'roots': [
        '<rootDir>/src'
    ],
    'transform': {
        '.*\.(tsx?)$': 'ts-jest'
    },
    'testRegex': '(/_tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ]
}