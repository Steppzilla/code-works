import axios from 'axios';
import {ArticleData, NewArticleData} from './model/ArticleData';
import {useState, useEffect} from "react";

export default function useArticles() {

    const [articles, setArticles] = useState<ArticleData[]>([])
    const [allCategories, setAllCategories] = useState<string[]>([]);

    useEffect(() => {
        getArticles();
    }, [])
    const getArticles = () => {
        axios.get("/api").then(data => setArticles(data.data))
            .then(() => getAllThemas())
    }

    const addArticle = (newArticle: NewArticleData) => {
        axios.post("/api", newArticle).then(() => console.log("posted!"))
    }


    const getAllThemas = () => {
        const themaArray: string[]  = articles.map((article: ArticleData) => article.category);
        let newArray: string[] = [];
        themaArray?.forEach(element => {
            if (!newArray.includes(element)) {
                newArray.push(element);
            }
        })
        setAllCategories( newArray);
    }

    return {allCategories, articles, getArticles, addArticle}
}