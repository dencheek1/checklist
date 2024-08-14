import { DocumentNode } from '../app/core/document-node';

export const testJson = {
  type: 'block',
  properties: ['bold', 'italik'],
  childern: [
    {
      childern: [],
      type: 'leaf',
      properties: [],
      data: 'This is leaf node 1',
    },
    {
      childern: [],
      type: 'leaf',
      properties: [],
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
          childern: [],
          type: 'leaf',
          properties: [],
          data: 'This is leaf node 4.2',
        },
      ],
      type: 'columns',
      properties: [],
    },
  ],
};
