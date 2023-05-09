import {IBoard, IResponsiblesBoard} from '@models';
import IconUser from '@images/icons/png/user.png';
import IconUser2 from '@images/icons/png/user-2.png';
import IconUser3 from '@images/icons/png/user-3.png';

export const responsibles: IResponsiblesBoard[] = [
  {
    id: 1,
    name: 'Welington',
    icon: IconUser,
  },
  {
    id: 2,
    name: 'Maria',
    icon: IconUser2,
  },
  {
    id: 3,
    name: 'Helena',
    icon: IconUser3,
  },
];

// export let getDataBoard: IBoard[] = [];

export const getDataBoard: IBoard[] = [
  {
    id: '1',
    title: 'Column 1',
    rows: [
      {
        id: '11',
        title: 'Row 1 (Column 1)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0], responsibles[1], responsibles[2]],
        description: 'Descrição',
      },
      {
        id: '12',
        title: 'Row 2 (Column 1)',
        date: '2023-05-07',
        where: 'Local',
        priority: 2,
        responsibles: [responsibles[1]],
        description: 'Descrição',
      },
      {
        id: '13',
        title: 'Row 3 (Column 1)',
        date: '2023-05-07',
        where: 'Local',
        priority: 3,
        responsibles: [responsibles[2]],
        description: 'Descrição',
      },
      {
        id: '14',
        title: 'Row 4 (Column 1)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0], responsibles[1]],
        description: 'Descrição',
      },
    ],
  },
  {
    id: '2',
    title: 'Column 2',
    rows: [
      {
        id: '21',
        title: 'Row 1 (Column 2)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0]],
        description: 'Descrição',
      },
      {
        id: '22',
        title: 'Row 2 (Column 2)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0]],
        description: 'Descrição',
      },
      {
        id: '23',
        title: 'Row 3 (Column 2)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0]],
        description: 'Descrição',
      },
    ],
  },
  {
    id: '3',
    title: 'Column 3',
    rows: [
      {
        id: '31',
        title: 'Row 1 (Column 3)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0]],
        description: 'Descrição',
      },
      {
        id: '32',
        title: 'Row 2 (Column 3)',
        date: '2023-05-07',
        where: 'Local',
        priority: 1,
        responsibles: [responsibles[0]],
        description: 'Descrição',
      },
    ],
  },
];
