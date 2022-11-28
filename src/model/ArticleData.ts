import {ComponentData} from "./ComponentData";

export type ArticleData = {
    date: Date,
    h1: string,
    h2: string,
    collections?:string[],
    data: (ComponentData) [],
}
