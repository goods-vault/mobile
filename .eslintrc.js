module.exports = {
  root: true,
  extends: ["@react-native"],
  plugins: ["@stylistic"],
  rules: {
    quotes: "off",
    "jsx-quotes": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "no-multi-spaces": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-trailing-spaces": "off",
    semi: "off",
    "semi-spacing": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "brace-style": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "lines-around-comment": "off",
    "new-parens": "off",
    "no-floating-decimal": "off",
    "no-mixed-operators": "off",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-element-newline": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "dot-location": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "off",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    "linebreak-style": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "newline-per-chained-call": "off",
    "no-multiple-empty-lines": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "rest-spread-spacing": "off",
    "semi-style": "off",
    "switch-colon-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "yield-star-spacing": "off",

    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "warn",

    "@stylistic/array-bracket-newline": "off",
    "@stylistic/array-bracket-spacing": ["error", "never"],  // default
    "@stylistic/array-element-newline": "off",
    "@stylistic/arrow-parens": ["error", "always"],  // default
    "@stylistic/arrow-spacing": ["error", {
      "before": true,  // default
      "after": true,  // default
    }],
    "@stylistic/block-spacing": ["error", "always"],  // default
    "@stylistic/brace-style": ["error", "1tbs", {  // default
      "allowSingleLine": false,  // default
    }],
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/comma-spacing": ["error", {
      "before": false,  // default
      "after": true,  // default
    }],
    "@stylistic/comma-style": ["error", "last"], // default
    "@stylistic/computed-property-spacing": ["error", "never"], // default
    "@stylistic/curly-newline": "off",
    "@stylistic/dot-location": ["warn", "property"], // default
    "@stylistic/eol-last": ["error", "always"], // default
    "@stylistic/function-call-argument-newline": "off",
    "@stylistic/function-call-spacing": ["error", "never"], // default
    "@stylistic/function-paren-newline": "off", // default
    "@stylistic/generator-star-spacing": ["error", "before"], // default
    "@stylistic/implicit-arrow-linebreak": ["error", "beside"], // default
    "@stylistic/indent": ["error", 2],
    "@stylistic/indent-binary-ops": ["error", 2],
    "@stylistic/jsx-child-element-spacing": "warn",
    "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
    "@stylistic/jsx-closing-tag-location": ["error", "line-aligned"],
    "@stylistic/jsx-curly-brace-presence": ["warn", {
      "props": "ignore",
      "children": "ignore",
      "propElementValues": "always"
    }],
    "@stylistic/jsx-curly-newline": "off",
    "@stylistic/jsx-curly-spacing": ["warn", {
      "when": "never", // default
      "attributes": true,  // default
      "children": true,  // default
    }],
    "@stylistic/jsx-equals-spacing": ["error", "never"],  // default
    "@stylistic/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],  // default
    "@stylistic/jsx-function-call-newline": ["warn", "multiline"],  // default
    "@stylistic/jsx-indent": ["error", 2],
    "@stylistic/jsx-indent-props": ["error", 2],
    "@stylistic/jsx-max-props-per-line": ["off", {  // default
      "maximum": 1,  // default
      "when": "always",  // default
    }],
    "@stylistic/jsx-newline": ["off", {  // default
      "prevent": false,  // default
      "allowMultilines": false,  // default
    }],
    "@stylistic/jsx-one-expression-per-line": ["error", {
      "allow": "literal",
    }],
    "@stylistic/jsx-pascal-case": ["error", {
      "allowAllCaps": false,   // default
      "allowNamespace": false,  // default
      "allowLeadingUnderscore": false,  // default
      "ignore": [],
    }],
    "@stylistic/jsx-props-no-multi-spaces": ["error"],
    "@stylistic/jsx-quotes": ["error", "prefer-double"], // default
    "@stylistic/jsx-self-closing-comp": ["error", {
      "component": true,  // default
      "html": true,  // default
    }],
    "@stylistic/jsx-sort-props": ["warn", {
      "callbacksLast": true,
      "shorthandFirst": false,
      "shorthandLast": true,
      "multiline": "last",
      "ignoreCase": true,
      "noSortAlphabetically": true,
      "reservedFirst": true,
      "locale": "auto",  // default
    }],
    "@stylistic/jsx-tag-spacing": ["warn", {
      "closingSlash": "never",  // default
      "beforeSelfClosing": "always",  // default
      "afterOpening": "never",  // default
      "beforeClosing": "allow",  // default
    }],
    "@stylistic/jsx-wrap-multilines": "off",
    "@stylistic/key-spacing": ["error", {
      "beforeColon": false,  // default
      "afterColon": true,  // default
      "mode": "strict",  // default
    }],
    "@stylistic/keyword-spacing": ["error", {
      "before": true,  // default
      "after": true,  // default
    }],
    "@stylistic/line-comment-position": ["warn", {
      "position": "beside",
    }],
    "@stylistic/linebreak-style": ["error", "unix"],  // default
    "@stylistic/lines-around-comment": ["warn", {
      "beforeBlockComment": true,  // default
      "afterBlockComment": false,
      "beforeLineComment": false,
      "afterLineComment": false,
      "allowBlockStart": true,
      "allowBlockEnd": false,
      "allowObjectStart": true,
      "allowObjectEnd": false,
      "allowArrayStart": true,
      "allowArrayEnd": false,
      "allowClassStart": true,
      "allowClassEnd": false,
      "afterHashbangComment": false,
    }],
    "@stylistic/lines-between-class-members": ["error", "always", {  // default
      "exceptAfterSingleLine": true,
    }],
    "@stylistic/max-len": ["error", {
      "code": 120,
      "tabWidth": 2,
      "comments": 100,
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": true,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": false,
      "ignoreRegExpLiterals": false,
    }],
    "@stylistic/max-statements-per-line": ["error", {
      "max": 1,  // default
    }],
    "@stylistic/member-delimiter-style": ["warn", {
      "multiline": {
        "delimiter": "semi",  // default
        "requireLast": true,  // default
      },
      "singleline": {
        "delimiter": "semi",  // default
        "requireLast": false,  // default
      },
      "multilineDetection": "brackets",  // default
    }],
    "@stylistic/multiline-comment-style": ["warn", "starred-block"], // default
    "@stylistic/multiline-ternary": "off",
    "@stylistic/new-parens": ["warn", "always"], // default
    "@stylistic/newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 3,
    }],
    "@stylistic/no-confusing-arrow": ["warn", {
      "allowParens": true,  // default
      "onlyOneSimpleParam": false,  // default
    }],
    "@stylistic/no-extra-parens": ["warn", "all"],  // default
    "@stylistic/no-extra-semi": "error",
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/no-mixed-operators": "warn",
    "@stylistic/no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-multiple-empty-lines": ["error", {
      "max": 2,  // default
      "maxEOF": 1,
      "maxBOF": 0,
    }],
    "@stylistic/no-tabs": ["error", {
      "allowIndentationTabs": false,  // default
    }],
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/nonblock-statement-body-position": ["error", "beside"],  // default
    "@stylistic/object-curly-newline": "off",
    "@stylistic/object-curly-spacing": ["error", "always"], // default
    "@stylistic/object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": true,
    }],
    "@stylistic/one-var-declaration-per-line": ["warn", "initializations"], // default
    "@stylistic/operator-linebreak": "off",
    "@stylistic/padded-blocks": ["error", "never"],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/quotes": ["error", "double"], // default
    "@stylistic/rest-spread-spacing": ["error", "never"], // default
    "@stylistic/semi": ["error", "always"], // default
    "@stylistic/semi-spacing": ["error", {
      "before": false,  // default
      "after": true,  // default
    }],
    "@stylistic/semi-style": ["error", "last"],  // default
    "@stylistic/space-before-blocks": ["error", "always"],  // default
    "@stylistic/space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always",
    }],
    "@stylistic/space-in-parens": ["error", "never"],  // default
    "@stylistic/space-infix-ops": ["error", {
      "int32Hint": false,  // default
    }],
    "@stylistic/space-unary-ops": ["error", {
      "words": true,
      "nonwords": false,
    }],
    "@stylistic/spaced-comment": ["warn", "always", {
      "exceptions": ["-", "+"],
    }],
    "@stylistic/switch-colon-spacing": ["error", {
      "after": true,  // default
      "before": false,  // default
    }],
    "@stylistic/template-curly-spacing": ["error", "never"],  // default
    "@stylistic/template-tag-spacing": ["error", "never"],  // default
    "@stylistic/type-annotation-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    "@stylistic/type-generic-spacing": "error",
    "@stylistic/type-named-tuple-spacing": "error",
    "@stylistic/wrap-iife": ["warn", "inside"],
    "@stylistic/wrap-regex": "warn",
    "@stylistic/yield-star-spacing": ["error", "after"],  // default
  },
};
