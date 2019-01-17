import React from 'react';
import { genID } from 'src/lib';
import Win10Blue from './Win10Blue';

export default {
  Win10Blue,
};

export const Placeholder = () => <div>placeholder</div>;

const getThemeID = genID();
export const themes = [
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Google not found',
    name: 'google',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'cover',
  },
  {
    id: getThemeID(),
    fullScreen: false,
    displayName: 'macOS update',
    name: 'macOS',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Ubuntu 18.04',
    name: 'ubuntu',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Wanna Crypto 2.0',
    name: 'wannacry',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10',
    name: 'win10',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 crash',
    name: 'win10-crash',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'contain',
    component: Win10Blue,
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 update',
    name: 'win10-update',
    imgUrl: 'https://via.placeholder.com/100x100',
    objectFit: 'contain',
  },
];
