import { node_class } from "./node-classes";
import { NodeType } from "./node-types";

export type alloweClassesType = {
    [key in NodeType as string] : node_class;
}

export const ALLOWED_CLASSES: alloweClassesType = {
    [NodeType.Block]:{
       box: true,
       small: true,
       big: true,
       large: true,
       italik: true,
       hover_effect: true 
    },
    [NodeType.Checkbox]:{
       box: true,
       small: true,
       big: true,
       large: true,
       italik: true,
       hover_effect: true 
    },
    [NodeType.Columns]:{
       box: true,
       hover_effect: true 
    },
    [NodeType.Leaf]:{
       box: true,
       small: true,
       big: true,
       large: true,
       italik: true,
       hover_effect: true 
    },
    [NodeType.Table]:{
       small: true,
       italik: true,
       hover_effect: true 
    },
}


