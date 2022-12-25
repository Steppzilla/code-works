import "../Article.css";
import {ArticleData} from "../../model/ArticleData";
import "./JsonViewEditor.css";
import {ChangeEvent} from "react";
import {jSonToArticleData} from "../../static/articleIndexing";

type JsonViewProps = {
    setArticle: (article: ArticleData) => void,
}

export default function JsonViewEditor({setArticle}: JsonViewProps) {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const jsonInputString: any = JSON.parse(event.target.value);
        setArticle(jSonToArticleData(jsonInputString));
    }

    return (
        <div id={"AE"}>
            <h1> JSON - Editor: </h1>
            <textarea className={"box"} onChange={(event) => handleChange(event)}>
            </textarea>
        </div>
    )
}
