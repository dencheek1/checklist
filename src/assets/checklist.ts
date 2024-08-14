import { DocumentNode } from '../app/core/document-node';

export const testJson = {
  nodeType: 'block',
  properties: ['bold', 'italik'],
  childern: [
    {
      childern: [],
      nodeType: 'leaf',
      properties: [],
      data: 'This is leaf node 1',
    },
    // {
    //   childern: [],
    //   nodeType: 'leaf',
    //   properties: [],
    //   data: 'This is leaf node 2',
    // },
    // {
    //   childern: [],
    //   nodeType: 'leaf',
    //   properties: [],
    //   data: 'This is leaf node 3',
    // },
    // {
    //   childern: [
    //     {
    //       childern: [],
    //       nodeType: 'leaf',
    //       properties: [],
    //       data: 'This is leaf node 4.1',
    //     },
    //     {
    //       childern: [],
    //       nodeType: 'leaf',
    //       properties: [],
    //       data: 'This is leaf node 4.2',
    //     },
    //   ],
    //   nodeType: 'columns',
    //   properties: [],
    // },
  ],
};
