import {ArticleData} from "../model/ArticleData";

import siteJson1 from "../articles/site1.json";
import siteJson2 from "../articles/site2.json";
import siteJson3 from "../articles/site3.json";

export const jSonToArticleData = (js: any) => {
    const newDate = new Date(Date.parse(js.date));
    const newArticleObj = {...js, "date": newDate}
    return newArticleObj as ArticleData;
}

export const jSonFromArticleData = (article: ArticleData) => {
    const isoDate = article.date.toISOString();
    return JSON.stringify({...article, date: isoDate});
}

const article1: ArticleData = jSonToArticleData(siteJson1);
const article2: ArticleData = jSonToArticleData(siteJson2);
const article3: ArticleData = jSonToArticleData(siteJson3);

export const articles = [article1, article2, article3];
