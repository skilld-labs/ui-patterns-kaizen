import './src/a-video.pcss.css';

export default {
  title: 'Atoms/Video',
};

export const Basic = {
  render: () => {
    const video = document.createElement('video');
    video.classList.add('a-video');
    video.setAttribute('controls', true);
    const src = document.createElement('source');
    src.src =
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    src.type = 'video/mp4';
    video.appendChild(src);
    return video.outerHTML;
  },
};
