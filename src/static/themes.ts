import {CSSProperties} from "react";
import {
    coldarkDark,
    materialDark,
    materialLight,
    okaidia,
    tomorrow
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export const styleArray: { [key: string]: CSSProperties; }[] = [
    materialLight,
    tomorrow,
    okaidia,
    coldarkDark,
    materialDark,
]

export const styleNames: string [] = [
    "light",
    "tomorrow",
    "okaidia",
    "coldarkDark",
    "materialDark",
];
