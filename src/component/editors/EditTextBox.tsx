import {article} from "../../static/codeStringExamples";
import {ComponentData} from "../../model/ComponentData";
import {TextBoxData} from "../../model/TextBoxData";
import {useState} from "react";
import "./EditTextBox.css";

export default function EditTextBox() {

    const textComponent: ComponentData = article.data.filter(ele => ele.type === "text")[0] as TextBoxData;

    const [text, setText] = useState<string[]>([""]);
    const [title, setTitle] = useState<string>("");

    const handleEdit = (s: number, value: string) => {
        console.log(s, text.length-1)
        const editText = text;
        if(s==text.length-1){
            editText.push("");
        }
        editText[s] = value;
        setText([...editText])
    }

    return (
        <>
            <h3>
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
        </>
    )
}
