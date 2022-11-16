import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './CodeStylePicker';
import "./Article.css";
import {javaExample} from "../static/codeStringExamples";
import CodeBox from "./CodeBox";
import Table from "./tableandList/Table";
import List from "./tableandList/List";

export default function Article() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[0]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[0]);

    const columns = [
        {
            name: "Cat",
            title: "Mew",
        },
        {
            name: "Director",
            title: "Dog",
        },
        {
            name: "Baby",
            title: "Bru",
        }
    ];

    const list = ["hallo du bla", "denk auch an das hier", "später vielleicht auch dies... "];

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
            <Table columns={columns}/>
            <List data={list} sorted={false}/>
        </>
    )
}
