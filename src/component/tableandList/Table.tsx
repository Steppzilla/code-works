import RowItem from "./RowItem";

type TableProps = {
    columns: object[],
}

export default function Table({columns}:TableProps) {

    return (
        <table>
            <tbody>
            <tr>
                {Object.keys(columns[0]).map(title => <th key={title}>{title}</th>)}
            </tr>
            {columns.map((rowObj,i) =>
                <RowItem key={Object.keys(columns)[i]} rowObj={rowObj}/>)
            }
            </tbody>
        </table>
    )
}
