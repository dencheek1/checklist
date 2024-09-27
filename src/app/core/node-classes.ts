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
    [key in NodeClasses]?: boolean;
}