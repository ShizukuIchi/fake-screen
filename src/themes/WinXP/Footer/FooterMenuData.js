import icon from 'src/assets/ie.ico';
import empty from 'src/assets/empty.png';

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
    icon,
    text: 'MSN',
  },
  {
    type: 'item',
    icon,
    text: 'Show all connections',
  },
];
export const AllPrograms = [
  {
    type: 'item',
    icon,
    text: 'Set Program Access and Defaults',
  },
  {
    type: 'item',
    icon,
    text: 'Windows Catalog',
  },
  {
    type: 'item',
    icon,
    text: 'Windows Update',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    icon,
    text: 'Accessories',
    items: [
      {
        type: 'menu',
        icon,
        text: 'Accessibility',
        items: [
          {
            type: 'item',
            icon,
            text: 'Accessibility Wizard',
          },
          {
            type: 'item',
            icon,
            text: 'Magnifier',
          },
          {
            type: 'item',
            icon,
            text: 'Narrator',
          },
          {
            type: 'item',
            icon,
            text: 'On-Screen Keyboard',
          },
          {
            type: 'item',
            icon,
            text: 'Utility Manager',
          },
        ],
      },
      {
        type: 'menu',
        icon,
        text: 'Communications',
        items: [
          {
            type: 'item',
            icon,
            text: 'HyperTerminal',
          },
          {
            type: 'item',
            icon,
            text: 'Network Connections',
          },
          {
            type: 'item',
            icon,
            text: 'Network Setup Wizard',
          },
          {
            type: 'item',
            icon,
            text: 'New Connection Wizard',
          },
          {
            type: 'item',
            icon,
            text: 'Wireless Network Setup Wizard',
          },
        ],
      },
      {
        type: 'menu',
        icon,
        text: 'Entertainment',
        items: [
          {
            type: 'item',
            icon,
            text: 'Sound Recorder',
          },
          {
            type: 'item',
            icon,
            text: 'Volume Control',
          },
          {
            type: 'item',
            icon,
            text: 'Windows Media Player',
          },
        ],
      },
      {
        type: 'menu',
        icon,
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
            icon,
            text: 'Disk Cleanup',
          },
          {
            type: 'item',
            icon,
            text: 'Disk Defragmenter',
          },
          {
            type: 'item',
            icon,
            text: 'Files and Settings Transfer Wizard',
          },
          {
            type: 'item',
            icon,
            text: 'Scheduled Tasks',
          },
          {
            type: 'item',
            icon,
            text: 'Security Center',
          },
          {
            type: 'item',
            icon,
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
        icon,
        text: 'Command Prompt',
      },
      {
        type: 'item',
        icon,
        text: 'Notepad',
      },
      {
        type: 'item',
        icon,
        text: 'Paint',
      },
      {
        type: 'item',
        icon,
        text: 'Calculator',
      },
      {
        type: 'item',
        icon,
        text: 'Program Compatibility Wizard',
      },
      {
        type: 'item',
        icon,
        text: 'Remote Desktop Connection',
      },
      {
        type: 'item',
        icon,
        text: 'Synchronize',
      },
      {
        type: 'item',
        icon,
        text: 'Tour Windows XP',
      },
      {
        type: 'item',
        icon,
        text: 'Windows Explorer',
      },
      {
        type: 'item',
        icon,
        text: 'WordPad',
      },
    ],
  },
  {
    type: 'menu',
    icon,
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
    icon,
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
    icon,
    text: 'Internet Explorer',
  },
  {
    type: 'item',
    icon,
    text: 'Outlook Express',
  },
  {
    type: 'item',
    icon,
    text: 'Remote Assistance',
  },
  {
    type: 'item',
    icon,
    text: 'Windows Media Player',
  },
  {
    type: 'item',
    icon,
    text: 'Windows Messenger',
  },
  {
    type: 'item',
    icon,
    text: 'Windows Movie Maker',
  },
];

export default {
  AllPrograms,
};
