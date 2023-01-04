import "./Table.css";

type TableProps = {
    columns: object[],
    titles: string[] | undefined,
    title: string,
    widths: string[]|undefined,
}

export default function Table({columns, titles, title, widths}: TableProps) {

    return (
        <>
            <h3>{title}</h3>
            <table className={"codeTable"}>
                <tbody>
                <tr>
                    {
                        titles ? Object.keys(columns[0]).map((title, i) =>
                                <th key={title} style={{width:widths?widths[i]+"px":"auto"}}>{titles[i]}</th>
                            )
                            :
                            Object.keys(columns[0]).map((title,t) =>
                                <th key={title} style={{width:widths?widths[t]+"px":"auto"}}>{title}</th>
                            )
                    }
                </tr>
                {columns.map((rowObj, i) =>
                    <tr key={Object.keys(columns)[i]}>
                        {Object.values(rowObj).map(cell =>
                            <td key={crypto.randomUUID()} 
                                dangerouslySetInnerHTML={{__html: cell}}/>
                        )}
                    </tr>
                )
                }
                </tbody>
            </table>
        </>
    )
}
