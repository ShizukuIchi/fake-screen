import icon from 'src/assets/81(16x16).png';
import empty from 'src/assets/empty.png';

import keyboard from 'src/assets/windowsIcons/58(16x16).png';
import cmd from 'src/assets/windowsIcons/56(16x16).png';
import calculator from 'src/assets/windowsIcons/74(16x16).png';
import paper from 'src/assets/windowsIcons/81(16x16).png';
import utility from 'src/assets/windowsIcons/119(16x16).png';
import volume from 'src/assets/windowsIcons/120(16x16).png';
import cleanDisk from 'src/assets/windowsIcons/128(16x16).png';
import wordPad from 'src/assets/windowsIcons/153(16x16).png';
import winExplorer from 'src/assets/windowsIcons/156(16x16).png';
import MSN from 'src/assets/windowsIcons/159(16x16).png';
import sync from 'src/assets/windowsIcons/182(16x16).png';
import security from 'src/assets/windowsIcons/214(16x16).png';
import access from 'src/assets/windowsIcons/227(16x16).png';

import wireless from 'src/assets/windowsIcons/234(16x16).png';
import accessibility from 'src/assets/windowsIcons/238(16x16).png';
import connection from 'src/assets/windowsIcons/309(16x16).png';
import update from 'src/assets/windowsIcons/322(16x16).png';
import notepad from 'src/assets/windowsIcons/327(16x16).png';
import networkAssistance from 'src/assets/windowsIcons/357(16x16).png';
import menu from 'src/assets/windowsIcons/358(16x16).png';
import transfer from 'src/assets/windowsIcons/367(16x16).png';
import txt from 'src/assets/windowsIcons/370(16x16).png';
import defragmenter from 'src/assets/windowsIcons/374(16x16).png';
import catalog from 'src/assets/windowsIcons/392(16x16).png';
import networkConnection from 'src/assets/windowsIcons/404(16x16).png';
import info from 'src/assets/windowsIcons/505(16x16).png';
import address from 'src/assets/windowsIcons/554(16x16).png';
import connectionWizard from 'src/assets/windowsIcons/663(16x16).png';
import networkSetup from 'src/assets/windowsIcons/664(16x16).png';
import hyperCmd from 'src/assets/windowsIcons/669(16x16).png';
import painter from 'src/assets/windowsIcons/680(16x16).png';
import sound from 'src/assets/windowsIcons/690(16x16).png';
import recent from 'src/assets/windowsIcons/716(16x16).png';
import compatibility from 'src/assets/windowsIcons/747(16x16).png';
import magnifier from 'src/assets/windowsIcons/817(16x16).png';
import mediaPlayer from 'src/assets/windowsIcons/846(16x16).png';
import outlook from 'src/assets/windowsIcons/887(16x16).png';
import movieMaker from 'src/assets/windowsIcons/894(16x16).png';
import ie from 'src/assets/windowsIcons/896(16x16).png';
import messenger from 'src/assets/windowsIcons/msn.png';

import narrator from 'src/assets/windowsIcons/narrator.ico';
// import iePaper from 'src/assets/windowsIcons/895(16x16).png';
// import remoteAssistance from 'src/assets/windowsIcons/504(16x16).png';
// import a from 'src/assets/windowsIcons/906(16x16).png';
// import a from 'src/assets/windowsIcons/229(16x16).png';
// import a from 'src/assets/windowsIcons/389(16x16).png';
// import a from 'src/assets/windowsIcons/394(16x16).png';
export const MyRecentDocuments = [
  {
    type: 'item',
    icon: empty,
    text: '(Empty)',
  },
];
export const ConnectTo = [
  {
    type: 'item',
    icon: MSN,
    text: 'MSN',
  },
  {
    type: 'item',
    icon: connection,
    text: 'Show all connections',
  },
];
export const AllPrograms = [
  {
    type: 'item',
    icon: access,
    text: 'Set Program Access and Defaults',
  },
  {
    type: 'item',
    icon: catalog,
    text: 'Windows Catalog',
  },
  {
    type: 'item',
    icon: update,
    text: 'Windows Update',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    icon: menu,
    text: 'Accessories',
    items: [
      {
        type: 'menu',
        icon: menu,
        text: 'Accessibility',
        items: [
          {
            type: 'item',
            icon: accessibility,
            text: 'Accessibility Wizard',
          },
          {
            type: 'item',
            icon: magnifier,
            text: 'Magnifier',
          },
          {
            type: 'item',
            icon: narrator,
            text: 'Narrator',
          },
          {
            type: 'item',
            icon: keyboard,
            text: 'On-Screen Keyboard',
          },
          {
            type: 'item',
            icon: utility,
            text: 'Utility Manager',
          },
        ],
      },
      {
        type: 'menu',
        icon: menu,
        text: 'Communications',
        items: [
          {
            type: 'item',
            icon: hyperCmd,
            text: 'HyperTerminal',
          },
          {
            type: 'item',
            icon: networkConnection,
            text: 'Network Connections',
          },
          {
            type: 'item',
            icon: networkSetup,
            text: 'Network Setup Wizard',
          },
          {
            type: 'item',
            icon: connectionWizard,
            text: 'New Connection Wizard',
          },
          {
            type: 'item',
            icon: wireless,
            text: 'Wireless Network Setup Wizard',
          },
        ],
      },
      {
        type: 'menu',
        icon: menu,
        text: 'Entertainment',
        items: [
          {
            type: 'item',
            icon: sound,
            text: 'Sound Recorder',
          },
          {
            type: 'item',
            icon: volume,
            text: 'Volume Control',
          },
          {
            type: 'item',
            icon: mediaPlayer,
            text: 'Windows Media Player',
          },
        ],
      },
      {
        type: 'menu',
        icon: menu,
        text: 'System Tools',
        items: [
          {
            type: 'item',
            icon,
            text: 'Backup',
          },
          {
            type: 'item',
            icon,
            text: 'Character Map',
          },
          {
            type: 'item',
            icon: cleanDisk,
            text: 'Disk Cleanup',
          },
          {
            type: 'item',
            icon: defragmenter,
            text: 'Disk Defragmenter',
          },
          {
            type: 'item',
            icon: transfer,
            text: 'Files and Settings Transfer Wizard',
          },
          {
            type: 'item',
            icon: recent,
            text: 'Scheduled Tasks',
          },
          {
            type: 'item',
            icon: security,
            text: 'Security Center',
          },
          {
            type: 'item',
            icon: info,
            text: 'System Information',
          },
          {
            type: 'item',
            icon,
            text: 'System Restore',
          },
        ],
      },
      {
        type: 'item',
        icon: address,
        text: 'Address Book',
      },
      {
        type: 'item',
        icon: cmd,
        text: 'Command Prompt',
      },
      {
        type: 'item',
        icon: notepad,
        text: 'Notepad',
      },
      {
        type: 'item',
        icon: painter,
        text: 'Paint',
      },
      {
        type: 'item',
        icon: calculator,
        text: 'Calculator',
      },
      {
        type: 'item',
        icon: compatibility,
        text: 'Program Compatibility Wizard',
      },
      {
        type: 'item',
        icon,
        text: 'Remote Desktop Connection',
      },
      {
        type: 'item',
        icon: sync,
        text: 'Synchronize',
      },
      {
        type: 'item',
        icon,
        text: 'Tour Windows XP',
      },
      {
        type: 'item',
        icon: winExplorer,
        text: 'Windows Explorer',
      },
      {
        type: 'item',
        icon: wordPad,
        text: 'WordPad',
      },
    ],
  },
  {
    type: 'menu',
    icon: menu,
    text: 'Games',
    items: [
      {
        type: 'item',
        icon,
        text: 'FreeCell',
      },
      {
        type: 'item',
        icon,
        text: 'Hearts',
      },
      {
        type: 'item',
        icon,
        text: 'Internet Backgammon',
      },
      {
        type: 'item',
        icon,
        text: 'Internet Checkers',
      },
      {
        type: 'item',
        icon,
        text: 'Internet Hearts',
      },
      {
        type: 'item',
        icon,
        text: 'Internet Reversi',
      },
      {
        type: 'item',
        icon,
        text: 'Internet Spades',
      },
      {
        type: 'item',
        icon,
        text: 'Minesweeper',
      },
      {
        type: 'item',
        icon,
        text: 'Pinball',
      },
      {
        type: 'item',
        icon,
        text: 'Solitaire',
      },
      {
        type: 'item',
        icon,
        text: 'Spider Solitaire',
      },
    ],
  },
  {
    type: 'menu',
    icon: menu,
    text: 'Startup',
    items: [
      {
        type: 'item',
        icon: empty,
        text: '(Empty)',
      },
    ],
  },
  {
    type: 'item',
    icon: ie,
    text: 'Internet Explorer',
  },
  {
    type: 'item',
    icon: outlook,
    text: 'Outlook Express',
  },
  {
    type: 'item',
    icon: networkAssistance,
    text: 'Remote Assistance',
  },
  {
    type: 'item',
    icon: mediaPlayer,
    text: 'Windows Media Player',
  },
  {
    type: 'item',
    icon: messenger,
    text: 'Windows Messenger',
  },
  {
    type: 'item',
    icon: movieMaker,
    text: 'Windows Movie Maker',
  },
];

export default {
  AllPrograms,
};
