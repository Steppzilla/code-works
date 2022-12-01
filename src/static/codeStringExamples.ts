import {ArticleData} from "../model/ArticleData";

import siteJson1 from "../articles/site1.json";
import siteJson2 from "../articles/site2.json";

const newDateString = siteJson1.date;
const newDate = new Date(Date.parse(newDateString));
const newArticleObj = {...siteJson1,"date":newDate}
export const article: ArticleData = newArticleObj as ArticleData;

const newDateString2 = siteJson2.date;
const newDate2 = new Date(Date.parse(newDateString2));
const newArticleObj2 = {...siteJson2,"date":newDate2}
const article2: ArticleData = newArticleObj2 as ArticleData;

export const articles = [article, article2];
