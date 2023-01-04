import { FormEvent, useState, MouseEvent } from "react";
import "./ListEditor.css";
import { ListData } from "../../model/ListData";
import SubmitResetButton from "./SubmitResetButton";

type ListEditorProps = {
    editData: (data: ListData, event: FormEvent) => void,
    data: ListData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function ListEditor(props: ListEditorProps) {

    const [list, setList] = useState<string[]>(props.data ? [...props.data.paragraphs] : [""]);
    const [sorted, setSorted] = useState<boolean>(props.data ? props.data.sortedList : true);
    const [title, setTitle] = useState<string>(props.data ? props.data.subTitle : "");

    const handleChange = (index: number, input: string) => {
        const editArr = list;
        if (index === list.length - 1) editArr.push("");
        editArr[index] = input;
        setList([...editArr]);
    }

    const toggleSorted = () => {
        sorted ? setSorted(false) : setSorted(true);
    }

    const handleSubmit = (event: FormEvent) => {
        let trimmedList: string[] = list.filter(item => item.length !== 0);
        if (trimmedList.length !== 0) {
            const listData: ListData = { dataType: "list", subTitle: title, sortedList: sorted, paragraphs: trimmedList }
            props.editData(listData, event);
        } else {
            event.preventDefault();
        }
        setTitle("");
        setSorted(true);
        setList([""])
    }
    const handleReset = (event: FormEvent) => {
        props.cancel();

        setTitle("");
        setSorted(true);
        setList([""])
    }

    return (
        <form
            onSubmit={handleSubmit}
            onReset={(event) => handleReset(event)}
            className={"editorBox"}>
            <button type="button" onClick={() => toggleSorted()}> {
                sorted ? "unsortiert" : "sortieren"}
            </button>
            <h3 className={"listEditTitle"}><input value={title} onChange={(e) =>
                setTitle(e.target.value)} /></h3>
            {sorted ?
                <ol className={"sortedList edit"}>
                    {list.map((row, r) =>
                        <li key={r}
                        >
                            <input value={row} onChange={
                                (event) =>
                                    handleChange(r, event.target.value)} />
                        </li>)}
                </ol>
                :
                <ul className={"unsortedList edit"}>
                    {list.map((row, r) =>
                        <li key={r}
                        ><input value={row} onChange={
                            (event) =>
                                handleChange(r, event.target.value)} />
                        </li>
                    )}
                </ul>
            }
            <SubmitResetButton disabledReset={false} disabledSubmit={list[0].length === 0} />
        </form>
    )
}
