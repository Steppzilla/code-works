import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {ChangeEvent, CSSProperties, KeyboardEventHandler, useState} from "react";
import "../../viewBoxes/codeBoxes/codeBox.css";
import CodeLanguagePicker from "./CodeLanguagePicker";
import {codeLanguage} from "../../../enum/codeLanguages";
import {styleArray, styleNames} from "../../../static/themes";
import CodeStylePicker from "./stylePicker/CodeStylePicker";

type CodeBoxProps = {
    actualCode: string,
    setCode: (val: string) => void,
}

export default function CodeBoxEditor() {
    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[1]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[1]);

    const [actualString, setActualString] = useState<string>("")
    const [actualLanguage, setActualLanguage] = useState<string>(Object.values(codeLanguage)[0])
    const [showNumbers, setShowNumbers] = useState<boolean>(true)

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

    const toggleNumbers = () => {
        showNumbers ? setShowNumbers(false) : setShowNumbers(true);
    }

    return (
        <div className={"box"}>
            <button onClick={() => toggleNumbers()}> {showNumbers ? "Zahlen ausblenden" : "Zahlen einblenden"}</button>
            <h3> Edit Code: </h3>
            <CodeLanguagePicker setActualLanguage={setActualLanguage}
                                actualLanguage={actualLanguage}/>
            <CodeStylePicker setActualStyle={setActualStyle} setActualStyleName={setActualStyleName} actualChosen={actualStyle}/>
            <div className={"codeBox " + actualStyleName}>
                <SyntaxHighlighter language={actualLanguage} style={actualStyle} wrapLines={true}
                                   showLineNumbers={showNumbers}>
                    {actualString}
                </SyntaxHighlighter>
            </div>
            <textarea className={"textEditField"} onChange={handleChange} onKeyDown={handleKeyDown}
                      value={actualString}/>
        </div>)
}
