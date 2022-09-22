export interface IBoxProps {
    value: string,
    label?: string,
    elementBox: IElementProps[]
    moveDataBox: IMoveBoxProps[]
}

export interface IMoveBoxProps {
    value: string,
    label?: string,
}

export interface IElementProps {
    value: string,
    createdTime: number,
}
