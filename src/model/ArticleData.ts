import {ComponentData, ComponentDataXXL} from "./ComponentData";

export type ArticleData = {
    id?: number,
    created?: Date,
    category: string,
    title: string,

    dataBlock: (ComponentData) [],
    tasks?: {dataIndex: number, taskTitle?:string, task: ComponentData[], answer: ComponentData[]}[]
}
export type NewArticleData = {
    category: string,
    title: string,
    dataBlock: (ComponentData) [],
    tasks?: {dataIndex: number, taskTitle:string, task: ComponentDataXXL[], answer: ComponentDataXXL[]}[]
}

