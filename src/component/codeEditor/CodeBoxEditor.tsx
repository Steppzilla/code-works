import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {ChangeEvent, CSSProperties, KeyboardEventHandler, useState} from "react";
import "./CodeBoxEditor.css";
import {languagesStringArray} from "../../static/codeLanguage";
import CodeLanguagePicker from "./CodeLanguagePicker";

type CodeBoxProps = {
    actualStyleName: string,
    actualStyle: { [key: string]: CSSProperties; },
}

export default function CodeBoxEditor({actualStyleName, actualStyle}: CodeBoxProps) {
    const [actualString, setActualString] = useState<string>("")
    const [actualLanguage, setActualLanguage] = useState<string>(languagesStringArray[0])


    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const element: HTMLTextAreaElement = event.target;
        setActualString(element.value);
    }

    const handleKeyDown: KeyboardEventHandler = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            setActualString(actualString + "   ")
        }
    }

    return (
        <div className={"editBox "}>
            <CodeLanguagePicker setActualLanguage={setActualLanguage}
                                actualLanguage={actualLanguage}/>
            <div className={"codeBox " + actualStyleName}>
                <SyntaxHighlighter language={"java"} style={actualStyle} wrapLines={true} showLineNumbers={true}>
                    {actualString}
                </SyntaxHighlighter>
            </div>
            <textarea onChange={handleChange} onKeyDown={handleKeyDown} value={actualString}/>
        </div>)
}
