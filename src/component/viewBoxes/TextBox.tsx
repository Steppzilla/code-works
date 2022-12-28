import "./TextBox.css"
type TextBoxProps = {
    title: string | undefined,
    text: string,
}

export default function TextBox({title, text}: TextBoxProps) {

    return (
        <>
            {title && <h3>{title}</h3>}
            <div className={"textBox"}>
            {
                <p className="textParagraph"  dangerouslySetInnerHTML={{__html: text}}/>
            }
            </div>
        </>
    )
}
