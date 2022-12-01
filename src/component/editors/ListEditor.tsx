import {FormEvent, useState} from "react";
import "./ListEditor.css";
import {ListData} from "../../model/ListData";

type ListEditorProps = {
    editData: (indeX: number | undefined, data: ListData, event: FormEvent) => void,
}

export default function ListEditor({editData}: ListEditorProps) {

    const [list, setList] = useState<string[]>([""]);
    const [sorted, setSorted] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");

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
            const listData: ListData = {type: "list", title: title, sorted: sorted, paragraphs: trimmedList}
            editData(undefined, listData, event);
        } else {
            event.preventDefault();
        }
        setTitle("");
        setSorted(true);
        setList([""])
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="button" onClick={() => toggleSorted()}> {
                sorted ? "unsortiert" : "sortieren"}
            </button>
            <h3 className={"listEditTitle"}><input value={title} onChange={(e) =>
                setTitle(e.target.value)}/></h3>
            {sorted ?
                <ol className={"sortedList edit"}>
                    {list.map((row, r) =>
                        <li key={r}
                        >
                            <input value={row} onChange={
                                (event) =>
                                    handleChange(r, event.target.value)}/>
                        </li>)}
                </ol>
                :
                <ul className={"unsortedList edit"}>
                    {list.map((row, r) =>
                        <li key={r}
                        ><input value={row} onChange={
                            (event) =>
                                handleChange(r, event.target.value)}/>
                        </li>
                    )}
                </ul>
            }
            <button type={"submit"} disabled={list[0].length === 0}> übernehmen</button>
        </form>
    )
}
