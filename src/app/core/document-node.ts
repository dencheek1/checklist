// Interface for document nodes.

import { Properties } from "./document-properties";

export interface DocumentNode {
    type : string;
    children : DocumentNode[];
    properties: Properties; 
    data?: string;
}