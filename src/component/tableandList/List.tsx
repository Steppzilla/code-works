type ListProps = {
    data: string[],
    sorted: boolean,
}

export default function List({data, sorted}: ListProps) {

    return (<>
            {sorted ?
                <ol>
                    {data.map(row=>
                    <li>{row}</li>)}
                </ol>
                :
                <ul>
                    {data.map(row=>
                        <li key={row}>{row}</li>)}
                </ul>
            }
        </>
    )
}
