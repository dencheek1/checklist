// Interface for document nodes.

import { Properties } from "./document-properties";
import { node_class } from "./node-classes";
import { NodeType } from "./node-types";

export interface DocumentNode {
    type : NodeType;
    children : DocumentNode[];
    properties: node_class; 
    data?: string;
}