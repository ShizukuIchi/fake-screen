import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import iePaper from 'src/assets/ie-paper.png';
import ie from 'src/assets/ie.ico';
import mine from 'src/assets/mine.png';

export const defaultAppSettings = [
  {
    icon: ie,
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
    isFocus: false,
  },
  {
    icon: mine,
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
    isFocus: false,
  },
];

export { InternetExplorer, Minesweeper };
