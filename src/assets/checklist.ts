import { DocumentNode } from '../app/core/document-node';
import { NodeClasses } from '../app/core/node-classes';
import { NodeType } from '../app/core/node-types';

export const testJson: DocumentNode = {
  type: NodeType.Block,
  properties: {},
  children: [
    {
      children: [],
      type: NodeType.Leaf,
      properties: { box: true},
      data: 'This is leaf node 2',
    },
    {
      children: [],
      type: NodeType.Leaf,
      properties: {},
      data: 'This is leaf node 2',
    },
    {
      children: [],
      type: NodeType.Leaf,
      properties: {}, 
      data: 'This is leaf node 2',
    },
    {
      children: [],
      type: NodeType.Checkbox,
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
