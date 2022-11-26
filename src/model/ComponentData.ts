export type ComponentData = {
    type: "diagram" | "code" | "list" | "table",
    diagramData: {
        color: string,
        title: string,
        types: { attribute: string, type: string | undefined }[]
    }[],
    title: string,
    data: string,
    language: string,
    paragraphs: string[],
    sorted: boolean,
    columns: object[],
    titles: string[] | undefined,
}
