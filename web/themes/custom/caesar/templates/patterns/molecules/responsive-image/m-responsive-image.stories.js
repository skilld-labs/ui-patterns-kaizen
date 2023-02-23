import DrupalAttribute from 'drupal-attribute';
import { useParameter } from '@storybook/client-api';
import componentSource from './m-responsive-image.yml';
import './m-responsive-image.src.css';
import { breakpoints } from '@caesar_sb/plugins/caesar';
import imageStyles from '@caesar/a-image/a-image.yml';
import { getImageProperties } from '@caesar/a-image/a-image.stories';

export default {
  title: 'Molecules/Responsive image',
  render: (args) => {
    let matched;
    let img_element;
    const sources = [];
    const picture_attributes = new DrupalAttribute();
    componentSource.groups.every((group) => {
      if (
        (args.group && group.label === args.group) ||
        (args.name && group.name === args.name)
      ) {
        matched = group;
        return false;
      }
      return true;
    });
    if (matched) {
      picture_attributes.setAttribute(
        'responsive-image-group-name',
        matched.name,
      );
      if (matched.fallback_image_style) {
        const matchedImageStyle = imageStyles.styles.find(
          (style) => style.name === matched.fallback_image_style,
        );
        if (matchedImageStyle) {
          const props = getImageProperties(matchedImageStyle);
          img_element = `<img ${args.alt ? `alt="${args.alt}"` : ''} src="${
            props.src
          }" class="a-image" image-style-name="${matchedImageStyle.name}"/>`;
        }
      } else {
        console.log(
          `Fallback image style for responsive image group "${matched.name}" not found.`,
        );
      }
      matched.breakpoints.forEach((breakpoint) => {
        if (breakpoints()[breakpoint.name]) {
          const source = new DrupalAttribute();
          let srcset = '';
          const imageStyleNames = [];
          ['1x', '2x'].forEach((multiplier, i) => {
            if (breakpoint[multiplier]) {
              const matchedImageStyle = imageStyles.styles.find(
                (style) => style.name === breakpoint[multiplier],
              );
              if (matchedImageStyle) {
                const props = getImageProperties(matchedImageStyle);
                if (i > 0) {
                  srcset += ', ';
                }
                srcset += `${props.src} ${multiplier}`;
                imageStyleNames.push({
                  multiplier,
                  style: matchedImageStyle.name,
                });
              } else {
                console.log(
                  `Image style "${breakpoint[multiplier]}" for ${multiplier} multiplier of breakpoint "${breakpoint.name}" doesn't exist in responsive image group "${matched.name}".`,
                );
              }
            } else {
              console.log(
                `${multiplier} multiplier of breakpoint "${breakpoint.name}" is not defined in responsive image group "${matched.name}".`,
              );
              if (multiplier === '2x') {
                console.log(
                  'You probably have to define 2x multiplier to take care of retina screens.',
                );
              }
            }
          });
          source.setAttribute('srcset', srcset);
          source.setAttribute('type', 'image/jpeg');
          source.setAttribute('media', breakpoints()[breakpoint.name]);
          imageStyleNames.forEach((imageStyleName) => {
            source.setAttribute(
              `${imageStyleName.multiplier}-image-style-name`,
              imageStyleName.style,
            );
          });
          sources.push(source);
        } else {
          console.log(
            `Breakpoint "${breakpoint.name}" doesn't exist in responsive image group "${matched.name}".`,
          );
        }
      });
    } else {
      console.log(
        `Responsive image group "${args.group || args.name}" not found.`,
      );
    }
    return useParameter('Twig')
      .twig({
        ref: '@molecules/responsive-image/m-responsive-image.html.twig',
      })
      .render({
        picture_attributes,
        img_element,
        sources,
      });
  },
  argTypes: {
    group: {
      name: 'Choose image style',
      control: {
        type: 'radio',
      },
      options: componentSource.groups.map((value) => value.label),
      defaultValue: componentSource.groups[0].label,
    },
  },
};

export const Basic = {};
