// Interface for document nodes.

export interface DocumentNode {
    type : string;
    childern : DocumentNode[];
    properties: string[]; 
    data?: string;
}