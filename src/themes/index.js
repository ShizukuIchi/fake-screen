import React from 'react';
import { genID } from 'src/lib';
import Win10Blue from './Win10Blue';
import MacOS from './MacOS';
import Google from './Google';
import WannaCry from './WannaCry';

export default {
  Win10Blue,
  MacOS,
};

export const Placeholder = () => <div>placeholder</div>;

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
    objectFit: 'cover',
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
    imgUrl: 'https://via.placeholder.com/500x300',
    isBackgroundDark: true,
    component: WannaCry,
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
    displayName: 'Windows 10',
    name: 'win10',
    imgUrl: 'https://via.placeholder.com/500x300',
    isBackgroundDark: false,
    component: null,
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
    imgUrl: 'https://via.placeholder.com/500x300',
    isBackgroundDark: false,
    component: null,
    objectFit: 'contain',
  },
];
