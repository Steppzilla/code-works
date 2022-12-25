import {ArticleData} from "../model/ArticleData";

import siteJson1 from "../articles/site1.json";
import siteJson2 from "../articles/site2.json";
import siteJson3 from "../articles/site3.json";
import siteJson4 from "../articles/site4.json";
import siteJson5 from "../articles/site5.json";
import siteJson6 from "../articles/site6.json";
import siteJson8 from "../articles/site8.json";
//import siteJson7 from "../articles/site7.json";

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
const article4: ArticleData = jSonToArticleData(siteJson4);
const article5: ArticleData = jSonToArticleData(siteJson5);
const article6: ArticleData = jSonToArticleData(siteJson6);
const article8: ArticleData = jSonToArticleData(siteJson8);

//const article7: ArticleData = jSonToArticleData(siteJson7);

export const articles = [article5, article6,article4,article1, article2,article3, article8];
