module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'plugins': [
    '@typescript-eslint',
    'react'
  ],
  'rules': {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'import/no-named-as-default': 0,
    'indent': [
      'error',
      2
    ],
    'react/jsx-uses-react': 'off',
    'max-len': 'off',
    'arrow-body-style': 'off',
    'keyword-spacing': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'default-param-last': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-unsafe-optional-chaining': 'off',
    'react/no-unstable-nested-components': 'off',
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    'react/destructuring-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'camelcase': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prefer-promise-reject-errors': 'off',
    'quotes': ['error', 'single'],
    'jsx-a11y/label-has-for': 'off',
    // "react/function-component-definition": "off",
    // "jsx-a11y/click-events-have-key-events": "off",
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/no-useless-path-segments': 'off',
    'object-curly-spacing': ['error', 'always'],
    // 'prefer-double-quotes': ['error', 'single', { avoidEscape: true }],

    'react/jsx-props-no-spreading': [
      2,
      {
        'custom': 'ignore'
      }
    ],
  }
}
