import { genID } from 'src/lib';
import Win10Blue from './Win10Blue';
import MacOS from './MacOS';
import Google from './Google';
import WannaCry from './WannaCry';
import Ubuntu from './Ubuntu';
import Win10Update from './Win10Update';
import DVDScreensaver from './DVDScreensaver';
import Win10 from './Win10';

const getThemeID = genID();
export const themes = [
  {
    id: getThemeID(),
    fullScreen: false,
    displayName: 'Google not found',
    name: 'google',
    imgUrl: 'https://i.imgur.com/cm1uwzI.png',
    isBackgroundDark: false,
    component: Google,
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'macOS update',
    name: 'macOS',
    imgUrl: 'https://i.imgur.com/keMbIbn.png',
    isBackgroundDark: true,
    objectFit: 'contain',
    component: MacOS,
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Ubuntu 18.04',
    name: 'ubuntu',
    imgUrl: 'https://i.imgur.com/XN599kK.png',
    isBackgroundDark: true,
    component: Ubuntu,
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Wanna Crypto 2.0',
    name: 'wannacry',
    imgUrl: 'https://i.imgur.com/pfF2PyS.png',
    isBackgroundDark: true,
    component: WannaCry,
    objectFit: 'contain',
  },

  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 crash',
    name: 'win10-crash',
    imgUrl: 'https://i.imgur.com/lRT82Co.png',
    isBackgroundDark: false,
    objectFit: 'contain',
    component: Win10Blue,
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 update',
    name: 'win10-update',
    imgUrl: 'https://i.imgur.com/vj1vLO7.png',
    isBackgroundDark: false,
    component: Win10Update,
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'DVD Screensaver',
    name: 'dvd-screensaver',
    imgUrl: 'https://i.imgur.com/AaSkNGk.png',
    isBackgroundDark: true,
    component: DVDScreensaver,
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 desktop',
    name: 'win10',
    imgUrl: 'https://via.placeholder.com/192x108',
    isBackgroundDark: true,
    component: Win10,
    objectFit: 'contain',
  },
  // {
  //   id: getThemeID(),
  //   fullScreen: true,
  //   displayName: 'Placeholder',
  //   name: 'placeholder',
  //   imgUrl: 'https://via.placeholder.com/192x108',
  //   isBackgroundDark: false,
  //   component: null,
  //   objectFit: 'contain',
  // },
];
