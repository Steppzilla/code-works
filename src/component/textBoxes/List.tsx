import "./List.css";

type ListProps = {
    data: string[],
    sorted: boolean,
    title: string,
}

export default function List({data, sorted, title}: ListProps) {

    return (<>
            <h3>{title}</h3>
            {sorted ?
                <ol className={"sortedList"}>
                    {data.map(row=>
                        <li key={row}
                            dangerouslySetInnerHTML={{ __html: row}}/>)}
                </ol>
                :
                <ul className={"unsortedList"}>
                    {data.map(row=>
                        <li key={row}
                        dangerouslySetInnerHTML={{ __html: row}}/>)}
                </ul>
            }
        </>
    )
}
