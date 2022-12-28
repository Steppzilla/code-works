import {ClassDiagramData} from "./ClassDiagramData";
import {CodeData} from "./CodeData";
import {ListData} from "./ListData";
import {TableData} from "./TableData";
import {TextBoxData} from "./TextBoxData";

export type ComponentDataXXL = {
    dataType: "diagram" | "code" | "list" | "table" | "text",

    subTitle?: string,
    titles?: string[],
    collections?:string[],
    dataText?: string,
    code?: string,
    codeLanguage?: string,
     sortedList?: boolean,

    paragraphs?: string[],
    tableTitles: string[],
    tableRows?: object[],
    tableWidths?:string[],
    diagramData?: {
        color: string,
        title: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[],
}

export type ComponentData = ClassDiagramData | CodeData | ListData | TableData | TextBoxData;

export const isDiagramType = (data: ComponentData): data is ClassDiagramData => {
    return data.dataType === "diagram";
}

export const isCodeType = (data: ComponentData): data is CodeData => {
    return data.dataType === "code";
}

export const isListType = (data: ComponentData): data is ListData => {
    return data.dataType === "list";
}

export const isTableType = (data: ComponentData): data is TableData => {
    return data.dataType === "table";
}

export const isTextType = (data: ComponentData): data is TextBoxData => {
    return data.dataType === "text";
}
