import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './CodeStylePicker';
import "./Article.css";
import {
    consoleExample,
    cssExample,
    htmlExample,
    javaExample,
    jsonExample,
    tsxExample
} from "../static/codeStringExamples";
import CodeBox from "./CodeBox";
import CodeLanguagePicker from "./CodeLanguagePicker";
import {languagesStringArray} from "../static/codeLanguage";

export default function Article() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[0]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[0]);
    const [actualLanguage, setActualLanguage] = useState<string>(languagesStringArray[0])

    return (
        <>
            <CodeStylePicker key={"key"}
                             setActualStyle={setActualStyle}
                             setActualStyleName={setActualStyleName}
                             actualChosen={actualStyle}
            />
            <CodeLanguagePicker setActualLanguage={setActualLanguage}
                                actualLanguage={actualLanguage}/>
            <h1> Java </h1>
            <h2> Hello World </h2>

            <CodeBox language={actualLanguage}
                     actualStyle={actualStyle}
                     actualStyleName={actualStyleName}
                     inputString={javaExample}/>
            <CodeBox language={actualLanguage}
                     actualStyle={actualStyle}
                     actualStyleName={actualStyleName}
                     inputString={htmlExample}/>
            <CodeBox language={actualLanguage}
                     actualStyle={actualStyle}
                     actualStyleName={actualStyleName}
                     inputString={tsxExample}/>
            <CodeBox language={actualLanguage}
                     actualStyle={actualStyle}
                     actualStyleName={actualStyleName}
                     inputString={cssExample}/>
            <CodeBox actualStyleName={actualStyleName}
                     actualStyle={actualStyle}
                     inputString={consoleExample}
                     language={actualLanguage}/>
            <CodeBox actualStyleName={actualStyleName}
                     actualStyle={actualStyle}
                     inputString={jsonExample}
                     language={actualLanguage}/>
            <ul>
                <li> hi</li>
            </ul>

            <ol>
                <li> ho</li>

            </ol>


        </>
    )
}
