import "./Table.css";
import {ChangeEvent, useState} from "react";

export default function TableEditor() {

    const [titles, setTitles] = useState<string[]>(["", ""]);
    const [title, setTitle] = useState<string>("");
    const [rows, setRows] = useState<object[]>([{"a": "", "b": ""}, {
        "a": "",
        "b": ""
    }]);

    const keysX = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

    const handleTableRows = (add: boolean) => {
        if (add) {
            const firstObj = rows[0]
            let newObject = {};
            Object.keys(firstObj).forEach(key => {
                newObject = {...newObject, [key]: ""};
            })
            setRows([...rows, newObject])
        } else {
            let columnCounter = rows.length;
            setRows(rows.slice(0, columnCounter - 1));
        }
    }

    const handleTableCells = (add: boolean) => {
        const actualFirstObj = rows[0];
        const maxIndex = Object.keys(actualFirstObj).length;
        const actualKey = keysX[maxIndex - 1];
        const nextKey = keysX[maxIndex];
        if (add) {
            const newArray = rows.map(obj => {
                return {...obj, [nextKey]: ""};
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
        rows[r] = {...editRow, [key]: html.value};
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

    return (
        <>
            Reihen:
            <button onClick={() => {
                handleTableRows(false)
            }}> - </button>
            <button onClick={() => {
                handleTableRows(true)
            }}> +
            </button>
            Spalten:
            <button onClick={() => {
                handleTableCells(false)
            }}> - </button>
            <button onClick={() => {
                handleTableCells(true)
            }}> +
            </button>
            <form>
                <h3><input onChange={changeTitle} value={title}/></h3>
                <table className={"codeTable"}>
                    <tbody>
                    <tr>
                        {titles.map((oneTitle, t) => <td key={keysX[t]}>
                            <input name={"header"} value={titles[t]} onChange={
                                (event) => changeTitles(t, event)}/>
                        </td>)
                        }
                    </tr>

                    {rows.map((rowObj, r) =>
                        <tr key={keysX[r]+r}>
                            {Object.keys(rowObj).map((cell, c) =>
                                <td key={""+r+c}>
                                    <input value={Object.values(rows[r])[c]}
                                           onChange={(event) => editTable(r, c, event)}/>
                                </td>
                            )}
                        </tr>)
                    }
                    </tbody>
                </table>
            </form>
        </>
    )
}
