export type ClassDiagramData = {
    type: "diagram",
    diagramData: {
        color: string,
        title: string,
        attributes: { attribute: string, type: string | undefined }[]
    }[],
}
