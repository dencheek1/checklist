// Interface for document nodes.

export interface DocumentNode {
    nodeType : string;
    childern : DocumentNode[];
    properties: string[]; 
    data?: string;
}