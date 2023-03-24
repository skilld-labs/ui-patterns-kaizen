<?php

/**
 * @file
 * Lists available colors and color schemes for the skilld theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' =>
[ 'color-white' => t('White'), 'color-black' => t('Black'), 'color-grey' =>
t('Grey'), 'color-grey-light' => t('Grey Light'), 'color-danger' => t('Danger'),
], // Pre-defined color schemes. 'schemes' => [ 'default' => [ 'title' =>
t('Functional Palette'), 'colors' => [ 'color-white' => '#fff', 'color-black' =>
'#000', 'color-grey' => '#dedede', 'color-grey-light' => '#fafafa',
'color-danger' => '#f00', ], ], ], // CSS files (excluding @import) to rewrite
with new color scheme. 'css' => [ 'color/colors.css', ], 'preview_library' =>
'skilld/color.preview', 'preview_html' => 'color/preview.html', // Files to
copy. 'copy' => [ 'logo.svg', ], ];
