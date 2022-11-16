import {CSSProperties} from "react";
import {coldarkDark, dracula, okaidia, tomorrow, vs, vscDarkPlus} from "react-syntax-highlighter/dist/cjs/styles/prism";

export const styleArray: { [key: string]: CSSProperties; }[] = [
    vs,
    tomorrow,
    okaidia,
    coldarkDark,
    dracula,
    vscDarkPlus,
]

export const styleNames: string [] = [
    "vs",
    "tomorrow",
    "okaidia",
    "coldarkDark",
    "dracula",
    "vscDarkPlus",
];

