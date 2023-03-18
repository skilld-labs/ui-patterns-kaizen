import { addons } from '@storybook/addons';

addons.register('my/panel', () => {
  addons.add('my/panel', {
    title: 'Example Storybook panel',
    type: 'panel',
    render: () => {
      return `<div><h2>I'm a panel addon in Storybook</h2></div>`;
    },
  });
});

addons.register('my/caesar', (api) => {
  api.setQueryParams({
    abc: 'this is abc',
    bbc: 'this is bbc',
  });
  api.addNotification({
    id: 'string',
    content: {
      headline: 'string',
      subHeadline: 'string | any',
    },
  });
});
