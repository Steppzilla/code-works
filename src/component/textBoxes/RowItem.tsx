import "./RowItem.css";
type RowItemProbs = {
    rowObj: object,
}
export default function RowItem({rowObj}: RowItemProbs) {

    return (
        <tr>
            {Object.values(rowObj).map(cell =>
                <td key={crypto.randomUUID()}
                dangerouslySetInnerHTML={{__html: cell}}/>
            )}
        </tr>
    )
}