import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import iePaper from 'src/assets/internetExplorer/ie-paper.png';
import ie from 'src/assets/internetExplorer/ie.png';
import mine from 'src/assets/minesweeper/mine-icon.png';
import error from 'src/assets/windowsIcons/897(16x16).png';

export const defaultAppState = [
  {
    title: 'Internet Explorer',
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 200,
      y: 40,
    },
    resizable: true,
    headerIcon: iePaper,
    minimized: false,
    maximized: false,
    id: 0,
  },
  {
    component: Minesweeper,
    title: 'Minesweeper',
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 230,
      y: 80,
    },
    resizable: false,
    headerIcon: mine,
    minimized: false,
    maximized: false,
    id: 1,
  },
];

export const defaultIconState = [
  {
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    headerIcon: iePaper,
    title: 'Internet Explorer',
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 200,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: false,
  },
  Minesweeper: {
    headerIcon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 230,
      y: 80,
    },
    resizable: false,
    minimized: false,
    maximized: false,
  },
  Error: {
    headerIcon: error,
    title: 'C:\\',
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 120,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
  },
};

export { InternetExplorer, Minesweeper, ErrorBox };
