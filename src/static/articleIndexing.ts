import {ArticleData} from "../model/ArticleData";

import siteJson1 from "../articles/a1.json";
import siteJson2 from "../articles/a2.json";
import siteJson3 from "../articles/a3.json";
import siteJson4 from "../articles/a4.json";
import siteJson5 from "../articles/a5.json";
import siteJson6 from "../articles/a6.json";
import { ArticleDataJSON } from "../model/ArticleDataJSON";
//import siteJson8 from "../articles/a7.json";
//import siteJson7 from "../articles/site7.json";

export const jSonToArticleData = (js: any) => {
    const newDate = new Date(Date.parse(js.created));
    const newArticleObj = {...js, "created": newDate}
    return newArticleObj as ArticleData;
}

export const jSonFromArticleData = (article: ArticleData) => {
    const isoDate = article.created?.toISOString();
    return JSON.stringify({...article, date: isoDate});
}

const article1: ArticleData = jSonToArticleData(siteJson1);
const article2: ArticleData = jSonToArticleData(siteJson2);
const article3: ArticleData = jSonToArticleData(siteJson3);
const article4: ArticleData = jSonToArticleData(siteJson4);
const article5: ArticleData = jSonToArticleData(siteJson5);
const article6: ArticleData = jSonToArticleData(siteJson6);
//const article8: ArticleData = jSonToArticleData(siteJson8);

//const article7: ArticleData = jSonToArticleData(siteJson7);

export const allArticles = [article5, article6,article4,article1, article2,article3];