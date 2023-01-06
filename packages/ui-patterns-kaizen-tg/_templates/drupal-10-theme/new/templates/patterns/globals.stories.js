---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/patterns/globals.stories.js
---
import { useEffect, useState } from '@storybook/client-api';

const component = {
  title: 'globals/Variables',
};

export default component;

const getCssVariables = (prefix) => {
  const variables = [].slice
    .call(document.styleSheets)
    .filter((styleSheet) => styleSheet.href === null)
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter((cssRule) => cssRule.selectorText === ':root')
    .map((cssRule) =>
      cssRule.cssText.split('{')[1].split('}')[0].trim().split(';'),
    )
    .flat()
    .filter((text) => text !== '')
    .map((text) => text.split(':'))
    .map((parts) => ({ key: parts[0].trim(), value: parts[1].trim() }));

  if (prefix) {
    return variables.filter((variable) => variable.key.startsWith(prefix));
  }
  return variables;
};

export const colorsList = () => {
  const colorVariables = getCssVariables('--color');
  return colorVariables
    .map(
      (variable) =>
        `
          <div style="display: flex; align-items: center; padding-bottom: 20px;">
            <div style="background: var(${variable.key}); border: 3px solid black; width: 60px; height: 60px; border-radius: 50%; margin-right: 15px;"></div>
            <label class="a-text a-text--header-4">${variable.key}</label>
          </div>
        `,
    )
    .join('');
};

export const fonts = () => {
  const fontsVariables = getCssVariables('--font-family');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="font-family: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

export const fontsWeights = () => {
  const fontsVariables = getCssVariables('--font-weight');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="font-weight: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

export const fontsSizes = () => {
  const fontsVariables = getCssVariables('--font-size');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="font-size: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

export const lineHeights = () => {
  const fontsVariables = getCssVariables('--line-height');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="line-height: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

const iconsArray = (icons) => {
  let iconString = '';
  if (window.<%= h.changeCase.lower(name) %>SvgSpritePath) {
    iconString += '<div style="display: flex; flex-wrap: wrap; gap: 16px;">';
    Array.prototype.forEach.call(icons, (icon) => {
      iconString += `
        <div style="width: 160px; border-radius: 6px; border: 1px solid rgba(0, 0, 0, 0.03); background-color: white; box-shadow: 0 4px 12px rgb(0 0 0 / 0.06); padding: 16px; text-align: center">
          <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 4px;">
            <div>
              <svg aria-hidden="true" style="width: 16px; height: 16px; vertical-align: top;">
                <use xlink:href="${window.<%= h.changeCase.lower(name) %>SvgSpritePath}#${icon.getAttribute('id')}"></use>
              </svg>
            </div>
            <div>
              ${icon.getAttribute('id')}
            </div>
          </div>
        </div>
      `;
    });
    iconString += '</div>';
  } else {
    iconString += 'No icons at this moment';
  }

  return iconString;
};

export const iconsList = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch(window.svgSpritePath)
      .then((response) => response.text())
      .then((text) => {
        const fakeIcon = document.createElement('div');
        fakeIcon.innerHTML = text;
        setIcons(fakeIcon.querySelectorAll('symbol'));
      });
  }, []);
  return iconsArray(icons);
};

export const breakpoints = () => {
  let breakpoints = '';
  for (const [key, value] of Object.entries(window.themeBreakpoints.<%= h.changeCase.lower(name) %>)) {
    breakpoints += `<tr><td style="padding: 5px 10px; background: #e6e6e6;"><strong>${key}</strong><td style="padding: 5px 10px; background: #f2f2f2;">${value}</td></td></tr>`
  }
  return `
    <table style="font-size: 14px;">
      <thead>
        <tr>
          <th style="text-align: start; padding: 5px 10px; background: #fff4f4; font-weight: 400;">Breakpoint name</th>
          <th style="text-align: start; padding: 5px 10px; background: #fff4f4; font-weight: 400;">Value</th>
        </tr>
      </thead>
      <tbody>
        ${breakpoints}
      </tbody>
    </table>
  `;
};
