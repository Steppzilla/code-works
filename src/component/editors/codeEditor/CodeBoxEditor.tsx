import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {ChangeEvent, CSSProperties, FormEvent, KeyboardEventHandler, useState} from "react";
import "../../viewBoxes/codeBoxes/codeBox.css";
import CodeLanguagePicker from "./CodeLanguagePicker";
import {codeLanguage} from "../../../enum/codeLanguages";
import {CodeData} from "../../../model/CodeData";
import SubmitResetButton from "../SubmitResetButton";
import useThemes from "../../../useThemes";

type CodeBoxProps = {
    editData: (data: CodeData, event: FormEvent) => void,
    data: CodeData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function CodeBoxEditor(props: CodeBoxProps) {
    const {styleNames, themes} = useThemes();
    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(themes[1]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[1]);

    const [title, setTitle] = useState<string>(props.data ? props.data.subTitle : "");
    const [actualString, setActualString] = useState<string>(props.data ? props.data.code : "")
    const [actualLanguage, setActualLanguage] = useState<string>(props.data ? props.data.codeLanguage : Object.values(codeLanguage)[0])

    const [showNumbers, setShowNumbers] = useState<boolean>(props.data ? props.data.sortedList : true)

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
        const codeData: CodeData = {
            dataType: "code",
            subTitle: title,
            code: actualCodeString,
            codeLanguage: actualLanguage,
            sortedList: showNumbers
        }
        props.editData(codeData, event);
        setTitle("");
        setActualString("")
        setActualLanguage(Object.values(codeLanguage)[0])
    }

    const getDataTrimmed = () => {
        return actualString.trim();
    }

    const handleReset = (event: FormEvent) => {
        event.preventDefault();
        props.cancel();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={"editorBox"}
            onReset={(event) => handleReset(event)}>

            {(title.length >= 1) && <h3>{title}</h3>}
            <div className={"codeBox " + actualStyleName} style={{opacity: 0.5}}>
                <SyntaxHighlighter language={actualLanguage} style={actualStyle} wrapLines={true}
                                   showLineNumbers={showNumbers}>
                    {actualString}
                </SyntaxHighlighter>
            </div>


            <button type={"button"}
                    onClick={() => toggleNumbers()}> {showNumbers ? "Zahlen ausblenden" : "Zahlen einblenden"}</button>
            <CodeLanguagePicker setActualLanguage={setActualLanguage}
                                actualLanguage={actualLanguage}/>
            <h3><input value={title} onChange={(event) => setTitle(event.target.value)}/></h3>

            <div className={"textFieldFrame"}>
            <textarea className={"textEditField"} onChange={handleChange} onKeyDown={handleKeyDown}
                      value={actualString}/>
            </div>
            <SubmitResetButton disabledReset={false} disabledSubmit={actualString.length === 0}/>
        </form>)
}
