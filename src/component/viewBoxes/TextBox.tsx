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
            {paragraphs.map((str,s) =>
                <p className="textParagraph" key={s} dangerouslySetInnerHTML={{__html: str}}/>)
            }
            </div>
        </>
    )
}
