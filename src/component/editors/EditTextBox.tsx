import {FormEvent, useState, useEffect} from "react";
import "./EditTextBox.css";
import {TextBoxData} from "../../model/TextBoxData";
import SubmitResetButton from "./SubmitResetButton";

type EditTextBoxProps = {
    editData: (data: TextBoxData, event: FormEvent) => void,
    data: TextBoxData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function EditTextBox(props: EditTextBoxProps) {

    useEffect(() => {
        if (props.data) {
            setText(props.data.dataText);
            props.data.subTitle && setTitle(props.data.subTitle);
        }
    }, [props.data])

    const [text, setText] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const handleEdit = (value: string) => {
        setText(value)
    }

    const handleSubmit = (event: FormEvent) => {
        const addedObject: TextBoxData = {subTitle: title, dataType: "text", dataText: text}
        setTitle("");
        setText("");
    }

    const handleReset = (event: FormEvent) => {
        props.data && props.cancel();
        !props.data && props.setShowEditor(false);
    }

    return (
        <form className={"editorBox"}
              onSubmit={handleSubmit} onReset={handleReset}>
            <h3 className={"titleTextEdit"}>
                <input value={title} onChange={(event) => setTitle(event.target.value)}/>
            </h3>
            <div className={"textBoxEditor"}>
                    <textarea
                        value={text}
                        onChange={(event) => handleEdit( event.target.value)}
                    />
            </div>
            <SubmitResetButton disabledReset={false} disabledSubmit={text.length === 0}/>
        </form>
    )
}
