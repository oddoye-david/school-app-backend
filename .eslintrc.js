module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        "linebreak-style": 0,
        "require-jsdoc": 0,
        "no-tabs": 0,
        "space-before-function-paren": 0,
        "eol-last": 0,
        "max-len": 0,
    }
};
