import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ie from 'src/assets/ie.png';

export const defaultAppSettings = [
  {
    image: ie,
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
    multiInstance: true,
    resizable: true,
    isFocus: false,
  },
  {
    image: ie,
    title: 'Minesweeper',
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 300,
      y: 300,
    },
    multiInstance: false,
    resizable: false,
    isFocus: false,
  },
];

export { InternetExplorer, Minesweeper };
