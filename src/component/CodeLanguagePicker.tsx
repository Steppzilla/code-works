import {useState} from "react";
import "./CodeStylePicker.css";
import {languagesStringArray} from "../static/codeLanguage";

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
            <button className={"popUpButton"} onClick={() => toggleShow()}>
                {props.actualLanguage ? props.actualLanguage : " "}
            </button>
            {show && <div className={"ButtonBox"}>
                {
                    languagesStringArray.map(
                        (singleLanguage) => {
                            return <button className={"colorPickButton"}
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
