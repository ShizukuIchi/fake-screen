import icon from 'src/assets/ie.ico';
import empty from 'src/assets/empty.png';

const data = [
  {
    type: 'item',
    icon,
    text: 'Internet',
  },
  {
    type: 'item',
    icon,
    text: 'Internet',
  },
  {
    type: 'menu',
    icon: empty,
    text: 'All Programs',
    items: [
      {
        type: 'menu',
        icon,
        text: 'Internet',
        items: [
          {
            type: 'item',
            icon,
            text: 'Internet',
          },
        ],
      },
      {
        type: 'item',
        icon,
        text: 'Internet',
      },
      {
        type: 'separator',
      },
      {
        type: 'menu',
        icon,
        text: 'Internet',
        items: [
          {
            type: 'item',
            icon,
            text: 'Internet',
          },
          {
            type: 'item',
            icon,
            text: 'Internet',
          },
          {
            type: 'item',
            icon,
            text: 'Internet',
          },
          {
            type: 'item',
            icon,
            text: 'Internet',
          },
        ],
      },
      {
        type: 'item',
        icon,
        text: 'Internet',
      },
    ],
  },
  {
    type: 'item',
    icon,
    text: 'Internet',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    icon,
    text: 'Internet',
  },
  {
    type: 'item',
    icon,
    text: 'Internet',
  },
];

export default data;
