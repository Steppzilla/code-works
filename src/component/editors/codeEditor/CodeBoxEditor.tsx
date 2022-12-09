import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ChangeEvent, CSSProperties, FormEvent, KeyboardEventHandler, useState, MouseEvent } from "react";
import "../../viewBoxes/codeBoxes/codeBox.css";
import CodeLanguagePicker from "./CodeLanguagePicker";
import { codeLanguage } from "../../../enum/codeLanguages";
import { styleArray, styleNames } from "../../../static/themes";
import CodeStylePicker from "./stylePicker/CodeStylePicker";
import { CodeData } from "../../../model/CodeData";

type CodeBoxProps = {
    editData: (data: CodeData, event: FormEvent) => void,
    data: CodeData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function CodeBoxEditor(props: CodeBoxProps) {
    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[1]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[1]);

    const [title, setTitle] = useState<string>(props.data ? props.data.title : "");
    const [actualString, setActualString] = useState<string>(props.data ? props.data.data : "")
    const [actualLanguage, setActualLanguage] = useState<string>(props.data ? props.data.language : Object.values(codeLanguage)[0])

    const [showNumbers, setShowNumbers] = useState<boolean>(props.data ? props.data.hasLineNumbers : true)

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

    const handleSubmit = (event: FormEvent) => {
        let actualCodeString = getDataTrimmed();
        const codeData: CodeData = { type: "code", title: title, data: actualCodeString, language: actualLanguage, hasLineNumbers: showNumbers }
        props.editData(codeData, event);
        setTitle("");
        setActualString("")
        setActualLanguage(Object.values(codeLanguage)[0])
    }

    const getDataTrimmed = () => {
        return actualString.trim();
    }

    const handleReset = (event: MouseEvent) => {
        event.preventDefault();
        props.cancel();
    }

    return (
        <form onSubmit={handleSubmit} className={"editorBox"}>
            <button type={"button"}
                onClick={() => toggleNumbers()}> {showNumbers ? "Zahlen ausblenden" : "Zahlen einblenden"}</button>
            <h3><input value={title} onChange={(event) => setTitle(event.target.value)} /></h3>
            <CodeLanguagePicker setActualLanguage={setActualLanguage}
                actualLanguage={actualLanguage} />
            <CodeStylePicker setActualStyle={setActualStyle} setActualStyleName={setActualStyleName}
                actualChosen={actualStyle} />
            <div className={"codeBox " + actualStyleName}>
                <SyntaxHighlighter language={actualLanguage} style={actualStyle} wrapLines={true}
                    showLineNumbers={showNumbers}>
                    {actualString}
                </SyntaxHighlighter>
            </div>
            <textarea className={"textEditField"} onChange={handleChange} onKeyDown={handleKeyDown}
                value={actualString} />
            <button type="submit" disabled={actualString.length === 0}> submit</button>
            <button type={"button"} onClick={(event) => handleReset(event)}>
                abbruch
            </button>
        </form>)
}
