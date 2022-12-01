export type ClassDiagramData = {
    type: "diagram",
    title: string,
    diagramData: {
        color: string,
        title: string,
        attributes: { attribute: string, type: string | undefined }[]
    }[],
}
