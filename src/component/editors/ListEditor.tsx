import {useState} from "react";
import "./ListEditor.css";

export default function ListEditor() {

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

    return (
        <>
            <button onClick={() => toggleSorted()}> {
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
        </>
    )
}
