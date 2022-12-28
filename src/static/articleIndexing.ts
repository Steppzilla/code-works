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
    const isoDate = article.date?.toISOString();
    return JSON.stringify({...article, date: isoDate});
}

