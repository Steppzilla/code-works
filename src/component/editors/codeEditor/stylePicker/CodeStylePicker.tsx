import {CSSProperties, useState} from "react";
import "./CodeStylePicker.css";
import {styleArray, styleNames} from "../../../../static/themes";

type DropDownMenuButtonsProperties = {
    setActualStyle: (style: { [key: string]: CSSProperties; }) => void,
    setActualStyleName: (name: string) => void,
    actualChosen: { [key: string]: CSSProperties; },
}

export default function CodeStylePicker(props: DropDownMenuButtonsProperties) {
    const [show, setShow] = useState<boolean>(false);

    const styles = styleArray;

    const toggleShow = () => {
        show ? setShow(false) : setShow(true);
    }

    const changeStyle = (singleStyle: { [key: string]: CSSProperties; }, name: string) => {
        props.setActualStyle(singleStyle);
        props.setActualStyleName(name);
        setShow(false);
    }

    return (
        <>
            <button type="button" className={"popUpButton"} onClick={() => toggleShow()}>
                {props.actualChosen && styleNames[styles.indexOf(props.actualChosen)]}
            </button>
            {show && <div className={"ButtonBox"}>
                {
                    styles.map(
                        (singleStyle, index) => {
                            return <button type={"button"}
                                key={styleNames[index]} className={"colorPickButton"}
                                           onClick={() => changeStyle(singleStyle, styleNames[index])}>
                                {styleNames[index]}
                            </button>;
                        }
                    )
                }
            </div>
            }
        </>
    )
}
