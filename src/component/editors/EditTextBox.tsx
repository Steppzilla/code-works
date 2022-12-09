import { FormEvent, useState, useEffect } from "react";
import "./EditTextBox.css";
import { TextBoxData } from "../../model/TextBoxData";

type EditTextBoxProps = {
    editData: (data: TextBoxData, event: FormEvent) => void,
    data: TextBoxData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function EditTextBox(props: EditTextBoxProps) {

    useEffect(() => {
        if (props.data) {
            setText([...props.data.paragraphs]);
            props.data.title && setTitle(props.data.title);
        }
    }, [props.data])

    const [text, setText] = useState<string[]>([""]);
    const [title, setTitle] = useState<string>("");

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
        const addedObject: TextBoxData = { title: title, type: "text", paragraphs: cleanedEmptyParagraphs }
        if (cleanedEmptyParagraphs.length !== 0) {
            props.editData(addedObject, event
            )
        }
        else {
            event.preventDefault();
        }
        setTitle("");
        setText([""])
    }

    const handleReset = (event: FormEvent) => {
        props.data && props.cancel();
        !props.data && props.setShowEditor(false);
    }

    return (
        <form className={"editorBox"}
            onSubmit={handleSubmit} onReset={handleReset}>
            <h3 className={"titleTextEdit"}>
                <input value={title} onChange={(event) => setTitle(event.target.value)} />
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
            <button type={"submit"} disabled={text[0].length === 0}> übernehmen </button>
            <button type={"reset"} >
                abbruch
            </button>
        </form>
    )
}
