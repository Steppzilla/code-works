import "./TextBox.css"
type TextBoxProps = {
    h3: string | undefined,
    paragraphs: string[],
}

export default function TextBox({h3, paragraphs}: TextBoxProps) {

    return (
        <>
            {h3 && <h3>{h3}</h3>}
            {paragraphs.map(str =>
                <p className="textParagraph" key={crypto.randomUUID()} dangerouslySetInnerHTML={{__html: str}}/>)
            }
        </>
    )
}
