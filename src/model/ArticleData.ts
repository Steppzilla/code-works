import {CodeData} from "./CodeData";
import {ListData} from "./ListData";
import {TextBoxData} from "./TextBoxData";
import {TableData} from "./TableData";
import {ClassDiagramData} from "./ClassDiagramData";

export type ArticleData = {
    h1: string,
    h2: string,
    data: (CodeData | ListData | TableData | TextBoxData | ClassDiagramData) [],
}
