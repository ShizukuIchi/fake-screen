import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import iePaper from 'src/assets/internetExplorer/ie-paper.png';
import ie from 'src/assets/internetExplorer/ie.ico';
import mine from 'src/assets/minesweeper/mine-icon.png';

export const defaultAppState = [
  {
    title: 'Internet Explorer',
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 100,
      y: 100,
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
      x: 900,
      y: 100,
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

export const appSettings = [
  {
    headerIcon: iePaper,
    title: 'Internet Explorer',
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 200,
      y: 200,
    },
    resizable: true,
    minimized: false,
    maximized: false,
  },
  {
    headerIcon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 300,
      y: 100,
    },
    resizable: false,
    minimized: false,
    maximized: false,
  },
];

export { InternetExplorer, Minesweeper };
