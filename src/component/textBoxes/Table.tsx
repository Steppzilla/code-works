import RowItem from "./RowItem";
import "./Table.css";

type TableProps = {
    columns: object[],
    titles: string[] | undefined,
    title: string,
}

export default function Table({columns, titles, title}: TableProps) {

    return (
        <>
            <h3>{title}</h3>
        <table className={"codeTable"}>
            <tbody>
            <tr>
                {
                    titles ? Object.keys(columns[0]).map((title, i) => <th key={title}>{titles[i]}</th>) :
                        Object.keys(columns[0]).map(title => <th key={title}>{title}</th>)
                }
            </tr>
            {columns.map((rowObj, i) =>
                <RowItem key={Object.keys(columns)[i]} rowObj={rowObj}/>)
            }
            </tbody>
        </table>
        </>
    )
}
