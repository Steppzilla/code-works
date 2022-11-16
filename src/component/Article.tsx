import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './CodeStylePicker';
import "./Article.css";
import {javaExample} from "../static/codeStringExamples";
import CodeBox from "./CodeBox";

export default function Article() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[0]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[0]);

    return (
        <>
            <CodeStylePicker key={"key"}
                             setActualStyle={setActualStyle}
                             setActualStyleName={setActualStyleName}
                             actualChosen={actualStyle}
            />

            <h1> Java </h1>
            <h2> Hello World </h2>

            <CodeBox language={"java"}
                     actualStyle={actualStyle}
                     actualStyleName={actualStyleName}
                     inputString={javaExample}/>
            <ul>
                <li> hi</li>
            </ul>

            <ol>
                <li> ho</li>

            </ol>


        </>
    )
}
