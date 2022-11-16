import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import "./CodeBoxEditor.css";
import {CSSProperties} from "react";

type CodeBoxProps = {
    actualStyleName: string,
    actualStyle: { [key: string]: CSSProperties; },
    inputString: string,
    language: string,
}

export default function CodeBox({actualStyleName, actualStyle, inputString, language}: CodeBoxProps) {

    return (
        <div className={"editBox "}>
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
