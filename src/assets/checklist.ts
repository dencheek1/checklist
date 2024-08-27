import { DocumentNode } from '../app/core/document-node';

export const testJson = {
  type: 'block',
  properties: ['bold', 'italik'],
  childern: [
    {
      childern: [],
      type: 'leaf',
      properties: ['box'],
      data: 'This is leaf node 1',
    },
    {
      childern: [],
      type: 'leaf',
      properties: ['box'],
      data: 'This is leaf node 2',
    },
    {
      childern: [],
      type: 'leaf',
      properties: [],
      data: 'This is leaf node 3',
    },
    {
      childern: [
        {
          childern: [],
          type: 'leaf',
          properties: [],
          data: 'This is leaf node 4.1',
        },
        {
          childern: [
           { childern: [],
            type: 'leaf',
            properties: [],
            data: 'This is leaf node 4.2.1'},
            { childern: [],
              type: 'leaf',
              properties: ['box'],
              data: 'This is leaf node 4.2.2'},
          ],
          type: 'columns',
          properties: [],
          data: 'This is leaf node 4.2',
        },
        {
          childern: [],
          type: 'leaf',
          properties: [],
          data: 'This is leaf node 4.3',
        },
        {
          childern: [],
          type: 'leaf',
          properties: [],
          data: 'This is leaf node 4.4',
        },
        {
          childern: [],
          type: 'leaf',
          properties: ['hover-effect'],
          data: 'This is leaf node 4.5',
        },
        {
          childern: [],
          type: 'leaf',
          properties: [],
          data: 'This is leaf node 4.6',
        },
        {
          childern: [],
          type: 'leaf',
          properties: [],
          data: 'This is leaf node 4.7',
        },
      ],
      type: 'columns',
      properties: [],
    },
  ],
};
