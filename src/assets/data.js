import { genID } from 'src/lib';

const getThemeID = genID();
export const themes = [
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Google not found',
    name: 'google',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'cover',
  },
  {
    id: getThemeID(),
    fullScreen: false,
    displayName: 'macOS update',
    name: 'macOS',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Ubuntu 18.04',
    name: 'ubuntu',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Wanna Crypto 2.0',
    name: 'wannacry',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10',
    name: 'win10',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 crash',
    name: 'win10-crash',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'contain',
  },
  {
    id: getThemeID(),
    fullScreen: true,
    displayName: 'Windows 10 update',
    name: 'win10-update',
    imgUrl: 'https://via.placeholder.com/400x250',
    objectFit: 'contain',
  },
];
