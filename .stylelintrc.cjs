module.exports = {
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            files: ['**/*.styles.ts'],
            customSyntax: 'postcss-styled-syntax',
        },
    ],
    rules: {
        'font-family-no-duplicate-names': true,
        'declaration-block-no-duplicate-custom-properties': true,
        'declaration-block-no-duplicate-properties': true,
        'keyframe-block-no-duplicate-selectors': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'block-no-empty': true,
        'comment-no-empty': true,
        'color-no-invalid-hex': true,
        'function-calc-no-unspaced-operator': true,
        'selector-class-pattern': null,
        'no-descending-specificity': null,
        'media-query-no-invalid': true,
        'selector-pseudo-element-colon-notation': 'double',
        'declaration-block-no-shorthand-property-overrides': null,
        'declaration-property-value-keyword-no-deprecated': null,
        'at-rule-no-deprecated': null,
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['if', 'else'],
            },
        ],
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['stylelint-commands'],
            },
        ],
        'media-feature-name-no-unknown': [
            true,
            {
                ignoreMediaFeatureNames: ['minpixel-ratio', 'min-device-pixel-ratio', '-o-min-device-pixel-ratio', 'min-moz-device-pixel-ratio'],
            },
        ],
        'no-invalid-double-slash-comments': true,
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'no-unknown-custom-properties': true,
        'order/order': ['declarations', 'rules', 'at-rules'],
    },
}
