export type ClassDiagramData = {
    dataType: "diagram",
    subTitle: string,
    diagramData: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[],
}
