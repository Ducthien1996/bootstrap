module.exports = {
    'env': {
      'browser': true,
      'commonjs': true,
      'es6': true,
    },
    'extends': [
      'google',
    ],
    'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
      'ecmaVersion': 2018,
    },
    'rules': {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "linebreak-style": 0
    },
  };
