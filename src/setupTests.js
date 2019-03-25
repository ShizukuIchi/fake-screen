import 'react-testing-library/cleanup-after-each';
import 'jest-extended';

// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
window.alert = console.log;
window.matchMedia = query => {
  return {
    addListener: fn => {
      fn({
        matches: query === 'test',
        media: query,
      });
    },
    removeListener: () => {},
    matches: true,
  };
};
