import {useState} from "react";
import {CSSProperties} from "react";
import {
    coldarkDark,
    materialDark,
    materialLight,
    okaidia,
    tomorrow
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {ArticleData} from "./model/ArticleData";
import useArticles from "./useArticles";

export default function useThemes(){
    const [themes, setThemes] = useState<{ [key: string]: CSSProperties; }[]>([
        materialLight,
        tomorrow,
        okaidia,
        coldarkDark,
        materialDark,
    ]);
    const [styleNames, setStyleNames] = useState<string[]>([
        "materialLight",
        "tomorrow",
        "okaidia",
        "coldarkDark",
        "materialDark",
    ]);
        
    return {styleNames, themes}
}