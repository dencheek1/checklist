import { DocumentNode } from '../app/core/document-node';

export const testJson: DocumentNode = {
  type: 'block',
  properties: {bold: true},
  children: [
    {
      children: [],
      type: 'leaf',
      properties: {'box': true},
      data: 'This is leaf node 2',
    },
    {
      children: [],
      type: 'leaf',
      properties: {},
      data: 'This is leaf node 2',
    },
    {
      children: [],
      type: 'leaf',
      properties:{}, 
      data: 'This is leaf node 2',
    },
    {
      children: [],
      type: 'checkbox',
      properties: {},
      data: 'Checkbox',
    },
// 
    // {
      // children: [],
      // type: 'leaf',
      // properties: ['box'],
      // data: 'This is leaf node 2',
    // },
// 
    // {
      // children: [],
      // type: 'leaf',
      // properties: ['box'],
      // data: 'This is leaf node 2',
    // },
// 
    // {
      // children: [],
      // type: 'leaf',
      // properties: ['box'],
      // data: 'This is leaf node 2',
    // },
// 
    // {
      // children: [],
      // type: 'leaf',
      // properties: ['box'],
      // data: 'This is leaf node 2',
    // },
// 
    // {
      // children: [],
      // type: 'leaf',
      // properties: [],
      // data: 'This is leaf node 3',
    // },
    // {
      // children: [
        // {
          // children: [],
          // type: 'leaf',
          // properties: [],
          // data: 'This is leaf node 4.1',
        // },
        // {
          // children: [
            // {
              // children: [],
              // type: 'leaf',
              // properties: [],
              // data: 'This is leaf node 4.2.1',
            // },
            // {
              // children: [],
              // type: 'leaf',
              // properties: ['box'],
              // data: 'This is leaf node 4.2.2',
            // },
          // ],
          // type: 'columns',
          // properties: [],
          // data: 'This is leaf node 4.2',
        // },
        // {
          // children: [],
          // type: 'leaf',
          // properties: [],
          // data: 'This is leaf node 4.3',
        // },
        // {
          // children: [],
          // type: 'leaf',
          // properties: [],
          // data: 'This is leaf node 4.4',
        // },
        // {
          // children: [],
          // type: 'leaf',
          // properties: ['hover-effect'],
          // data: 'This is leaf node 4.5',
        // },
        // {
          // children: [],
          // type: 'leaf',
          // properties: [],
          // data: 'This is leaf node 4.6',
        // },
        // {
          // children: [],
          // type: 'leaf',
          // properties: [],
          // data: 'This is leaf node 4.7',
        // },
      // ],
      // type: 'columns',
      // properties: [],
    // },
    // 
    // {
      // type: '',
      // children: [],
      // properties: [],
    // },
  ],
};
