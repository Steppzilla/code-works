import "./TextBox.css"
type TextBoxProps = {
    title: string | undefined,
    paragraphs: string[],
}

export default function TextBox({title, paragraphs}: TextBoxProps) {

    return (
        <>
            {title && <h3>{title}</h3>}
            <div className={"textBox"}>
            {paragraphs.map(str =>
                <p className="textParagraph" key={crypto.randomUUID()} dangerouslySetInnerHTML={{__html: str}}/>)
            }
            </div>
        </>
    )
}
