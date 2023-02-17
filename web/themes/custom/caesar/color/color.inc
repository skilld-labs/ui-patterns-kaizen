<?php

/**
 * @file
 * Lists available colors and color schemes for the caesar theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'color-dark' => t('Dark'),
    'color-dark-accent' => t('Dark / Accent'),
    'color-dark-gray' => t('Dark / Gray'),
    'color-light' => t('Light'),
    'color-light-accent' => t('Light / Accent'),
    'color-light-gray' => t('Light / Gray'),
    'color-page-bg' => t('Page / Bg'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Functional Palette'),
      'colors' => [
        'color-dark' => '#391400',
        'color-dark-accent' => '#ef6d58',
        'color-dark-gray' => '#391409',
        'color-light' => '#fff',
        'color-light-accent' => '#ef6d58',
        'color-light-gray' => '#eeeeee',
        'color-page-bg' => '#fdf0ed',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'color/colors.css',
  ],

  'preview_library' => 'caesar/color.preview',
  'preview_html' => 'color/preview.html',

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],
];
