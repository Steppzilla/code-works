import "../viewBoxes/Table.css";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import "./TableEditor.css";
import { TableData } from "../../model/TableData";
import SubmitResetButton from "./SubmitResetButton";

type TableEditorProps = {
    editData: (data: TableData, event: FormEvent) => void,
    data: TableData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function TableEditor(props: TableEditorProps) {

    const [titles, setTitles] = useState<string[]>((props.data && props.data.tableTitles) ? [...props.data.tableTitles] : ["", ""]);
    const [title, setTitle] = useState<string>(props.data ? props.data.subTitle : "");
    const [rows, setRows] = useState<object[]>(props.data ? [...props.data.tableRows] : [{ "a": "", "b": "" }, {
        "a": "",
        "b": ""
    }]);

    const keysX = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

    const handleReset = (event: FormEvent) => {
        props.data && props.cancel();
        !props.data && props.setShowEditor(false);
    }

    const handleTableRows = (add: boolean, event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (add) {
            const firstObj = rows[0]
            let newObject = {};
            Object.keys(firstObj).forEach(key => {
                newObject = { ...newObject, [key]: "" };
            })
            setRows([...rows, newObject])
        } else {
            let columnCounter = rows.length;
            setRows(rows.slice(0, columnCounter - 1));
        }
    }

    const handleTableCells = (add: boolean, event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const actualFirstObj = rows[0];
        const maxIndex = Object.keys(actualFirstObj).length;
        const actualKey = keysX[maxIndex - 1];
        const nextKey = keysX[maxIndex];
        if (add) {
            const newArray = rows.map(obj => {
                return { ...obj, [nextKey]: "" };
            });
            setRows(newArray);
            setTitles([...titles, ""])
        } else {
            const newArray = rows.map(obj => {
                // @ts-ignore
                delete obj[actualKey];
                return obj;
            });
            setRows(newArray);
            titles.pop();
            setTitles(titles)
        }
    }

    const editTable = (r: number, c: number, event: ChangeEvent<HTMLElement>) => {
        const editRow = rows[r];
        const key = Object.keys(editRow)[c];
        const html = event.target as HTMLFormElement;
        // @ts-ignore
        rows[r] = { ...editRow, [key]: html.value };
        setRows([...rows])
    }

    const changeTitles = (index: number, event: ChangeEvent) => {
        const currentHtml = event.target as HTMLInputElement;
        titles[index] = currentHtml.value;
        setTitles([...titles])
    }

    const changeTitle = (event: ChangeEvent) => {
        const element = event.target as HTMLFormElement;
        setTitle(element.value);
    }

    const handleSubmit = (event: FormEvent) => {
        const tableData: TableData = { dataType: "table", subTitle: title, tableTitles: titles, tableRows: rows }
        props.editData(tableData, event);
        setTitle("");
        setTitles(["", ""])
        setRows([{ "a": "", "b": "" }, {
            "a": "",
            "b": ""
        }])
    }

    return (
        <form id={"editTableForm"} className={"editorBox"}
            onSubmit={handleSubmit}
            onReset={(event) => handleReset(event)}>
            <h3><input onChange={changeTitle} value={title} /></h3>
            <div>
                <div>
                    <button type={"button"} onClick={(event) => {
                        handleTableCells(false, event)
                    }}> -
                    </button>
                    <button type={"button"} onClick={(event) => {
                        handleTableCells(true, event)
                    }}> +
                    </button>
                </div>
                <div>
                    <div>
                        <button type={"button"} onClick={(event) =>
                            handleTableRows(false, event)
                        }> -
                        </button>
                        <button type={"button"} onClick={(event) =>
                            handleTableRows(true, event)
                        }> +
                        </button>
                    </div>
                    <table className={"codeTable"}>
                        <tbody>
                            <tr>
                                {titles.map((oneTitle, t) => <td key={keysX[t]}>
                                    <input name={"header"} value={titles[t]} onChange={
                                        (event) => changeTitles(t, event)} />
                                </td>)
                                }
                            </tr>

                            {rows.map((rowObj, r) =>
                                <tr key={keysX[r] + r}>
                                    {Object.keys(rowObj).map((cell, c) =>
                                        <td key={"" + r + c}>
                                            <input value={Object.values(rows[r])[c]}
                                                onChange={(event) => editTable(r, c, event)} />
                                        </td>
                                    )}
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <SubmitResetButton disabledReset={false} disabledSubmit={false} />
                </div>
            </div>
        </form >
    )
}
