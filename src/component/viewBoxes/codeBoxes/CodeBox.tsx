import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import "./codeBox.css";
import {CSSProperties} from "react";

type CodeBoxProps = {
    title: string,
    actualStyleName: string,
    actualStyle: { [key: string]: CSSProperties; },
    inputString: string,
    language: string,
}

export default function CodeBox({title,actualStyleName, actualStyle, inputString, language}: CodeBoxProps) {

    return (
        <div className={"box"}>
            <h3>{title}</h3>
            <div className={"codeBox " + actualStyleName}>
                <SyntaxHighlighter
                    language={language}
                    style={actualStyle}
                    wrapLines={true}
                    showLineNumbers={true}>
                    {inputString}
                </SyntaxHighlighter>
            </div>
        </div>)
}
