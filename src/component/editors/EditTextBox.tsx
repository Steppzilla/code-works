import {FormEvent, useState} from "react";
import "./EditTextBox.css";
import {TextBoxData} from "../../model/TextBoxData";

type EditTextBoxProps = {
    editData: ( data: TextBoxData, event: FormEvent) => void,
    data: TextBoxData | undefined,
}

export default function EditTextBox(props: EditTextBoxProps) {

    const [text, setText] = useState<string[]>(props.data?props.data.paragraphs:[""]);
    const [title, setTitle] = useState<string>((props.data&&props.data.title)?props.data.title:"");

    const handleEdit = (s: number, value: string) => {
        const editText = text;
        if (s === text.length - 1) {
            editText.push("");
        }
        editText[s] = value;
        setText([...editText])
    }

    const handleSubmit = (event: FormEvent) => {
        let cleanedEmptyParagraphs: string[] = text.filter(par => par.length !== 0);
        const addedObject: TextBoxData = {title: title, type: "text", paragraphs: cleanedEmptyParagraphs}
        if (cleanedEmptyParagraphs.length !== 0) {
            props.editData(                addedObject, event
            )
        }
        else{
            event.preventDefault();
        }
        setTitle("");
        setText([""])
    }

    return (
        <form onSubmit={(event) =>
            handleSubmit(event)}>
            <h3 className={"titleTextEdit"}>
                <input value={title} onChange={(event) => setTitle(event.target.value)}/>
            </h3>
            <div className={"textBoxEditor"}>
                {text.map((str, s) =>
                    <textarea
                        key={s}
                        value={str}
                        onChange={(event) => handleEdit(s, event.target.value)}
                    />
                )}
            </div>
            <button type={"submit"} disabled={text[0].length===0}> übernehmen</button>
        </form>
    )
}
