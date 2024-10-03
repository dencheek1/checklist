export enum NodeClasses{
    BOX = 'box',
    SMALL = 'small',
    BIG = 'big',
    LARGE = 'large',
    ITALIK = 'italik',
    BOLD = 'bold',
    HOVER_EFFECT = 'hover_effect',
}

export type node_class = {
    [key in keyof NodeClasses as string]?: boolean;
    // box:boolean;
    // small:boolean;
    // big:boolean;
    // large:boolean;
    // italik:boolean;
    // hover_effect:boolean;
}