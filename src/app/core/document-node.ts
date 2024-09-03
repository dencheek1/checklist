// Interface for document nodes.

export interface DocumentNode {
    type : string;
    children : DocumentNode[];
    properties: string[]; 
    data?: string;
}