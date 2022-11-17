export type ClassDiagramData = {
    type: "diagram",
    data: {
        color: string,
        title: string,
        types: { attribute: string, type: string | undefined }[]
    }[],
}
