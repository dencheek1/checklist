export enum NodeClasses{
    box = 'box',
    small = 'small',
    big = 'big',
    large = 'large',
    italik = 'italik',
    bold = 'bold',
    hover_effect = 'hover_effect',
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