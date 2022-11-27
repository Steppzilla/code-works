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
                        titles ? Object.keys(columns[0]).map((title, i) =>
                                <th key={title}>{titles[i]}</th>
                            )
                            :
                            Object.keys(columns[0]).map(title =>
                                <th key={title}>{title}</th>
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
