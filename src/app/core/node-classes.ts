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
    [key in  NodeClasses as string]?: boolean;
}