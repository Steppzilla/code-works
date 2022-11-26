export type ClassDiagramData = {
    type: "diagram",
    diagramData: {
        color: string,
        title: string,
        types: { attribute: string, type: string | undefined }[]
    }[],
}
