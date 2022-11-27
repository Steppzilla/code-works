import {ClassDiagramData} from "./ClassDiagramData";
import {CodeData} from "./CodeData";
import {ListData} from "./ListData";
import {TableData} from "./TableData";
import {TextBoxData} from "./TextBoxData";

export type ComponentDataXXL = {
    type: "diagram" | "code" | "list" | "table" | "text",
    diagramData?: {
        color: string,
        title: string,
        attributes: { attribute: string, type: string | undefined }[]
    }[],
    title?: string,
    titles?: string[],
    data?: string,
    language?: string,
    paragraphs?: string[],
    sorted?: boolean,
    rows?: object[],
}

export type ComponentData = ClassDiagramData | CodeData | ListData | TableData | TextBoxData;

export const isDiagramType = (data: ComponentData): data is ClassDiagramData => {
    return data.type === "diagram";
}

export const isCodeType = (data: ComponentData): data is CodeData => {
    return data.type === "code";
}

export const isListType = (data: ComponentData): data is ListData => {
    return data.type === "list";
}

export const isTableType = (data: ComponentData): data is TableData => {
    return data.type === "table";
}

export const isTextType = (data: ComponentData): data is TextBoxData => {
    return data.type === "text";
}
