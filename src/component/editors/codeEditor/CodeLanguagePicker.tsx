import { useState } from "react";
import "./stylePicker/CodeStylePicker.css";
import { codeLanguage } from "../../../enum/codeLanguages";

type CodeLanguagePickerProps = {
    setActualLanguage: (name: string) => void,
    actualLanguage: string,
}

export default function CodeLanguagePicker(props: CodeLanguagePickerProps) {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = () => {
        show ? setShow(false) : setShow(true);
    }

    const changeLanguage = (name: string) => {
        props.setActualLanguage(name);
        setShow(false);
    }

    return (
        <>
            <button type={"button"} className={"popUpButton"} onClick={() => toggleShow()}>
                {props.actualLanguage ? props.actualLanguage : " "}
            </button>
            {show && <div className={"ButtonBox"}>
                {
                    Object.values(codeLanguage).map(
                        (singleLanguage) => {
                            return <button
                                key={singleLanguage}
                                className={"colorPickButton"}
                                onClick={() => changeLanguage(singleLanguage)}>
                                {singleLanguage}
                            </button>;
                        }
                    )
                }
            </div>
            }
        </>
    )
}
