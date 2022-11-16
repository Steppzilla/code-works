import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './CodeStylePicker';
import "./code.css";

export default function Code() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[0]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[0]);

    const string2 = "public class HelloWorld{\n" +
        "     public static void main (String[] args){ //Ausgabe Hello World!\n" +
        "          System.out.println(\"Hello World!\");\n" +
        "     }" +
        "\n}";


    return (
        <>
            <div className={"codeBox " + actualStyleName}>
                <SyntaxHighlighter language={"java"} style={actualStyle} >
                    {string2}
                </SyntaxHighlighter>
            </div>

            <CodeStylePicker key={"key"}
                             setActualStyle={setActualStyle}
                             setActualStyleName={setActualStyleName}
                             actualChosen={actualStyle}
            />
        </>
    )
}
