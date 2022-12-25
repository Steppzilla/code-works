import { CSSProperties } from "react";
import {
    coldarkDark,
    materialDark,
    materialLight,
    okaidia,
    tomorrow
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { articles } from "./articleIndexing";

export const styleArray: { [key: string]: CSSProperties; }[] = [
    materialLight,
    tomorrow,
    okaidia,
    coldarkDark,
    materialDark,
]

export const styleNames: string[] = [
    "light",
    "tomorrow",
    "okaidia",
    "coldarkDark",
    "materialDark",
];

const themaArray: string[] = articles.map(article => article.h1);

export let allThemaArray: string[] = [];

export const getAllThemas = () => {
    let newArray: string[] = [];
    themaArray.forEach(element => {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    })
    allThemaArray = newArray;
}


