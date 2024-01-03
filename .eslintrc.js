module.exports = {
  env: {
    node: true,
    browser: true
  },
  root: true,
  parser: 'vue-eslint-parser',
  extends: [
    'prettier',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-essential',
  ],

  rules: {
    // base
    indent: 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'prefer-template': 'error',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',

    // ts
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/space-before-function-paren': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase'],
        selector: 'variable'
      },
      {
        format: ['camelCase'],
        selector: 'function'
      },
      {
        format: ['PascalCase'],
        selector: 'enumMember'
      }
    ],

    // vue
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'vue/prefer-template': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: false,
        ignoreUrls: true
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],

    // others
    'import/no-named-as-default-member': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': 'error'

  },
  plugins: ['@typescript-eslint', 'prefer-arrow-functions', 'import'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  }
}
