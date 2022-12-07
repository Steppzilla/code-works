import {ComponentData} from "./ComponentData";

export type ArticleData = {
    date: Date,
    h1: string,
    h2: string,
    collections?:string[],
    data: (ComponentData) [],
    tasks?: {dataIndex: number, task: TaskSheet, answer: TaskSheet}
}

type TaskSheet =
    {
        data: ComponentData[],
    }
