import {ArticleData} from "../model/ArticleData";

import siteJson1 from "../articles/site1.json";
import siteJson2 from "../articles/site2.json";

export const jSonToArticleData = (js:any) => {
    const newDate = new Date(Date.parse(js.date));
    const newArticleObj = {...js, "date": newDate}
    return newArticleObj as ArticleData;
}

const article1: ArticleData = jSonToArticleData(siteJson1);
const article2: ArticleData = jSonToArticleData(siteJson2);

export const articles = [article1, article2];
