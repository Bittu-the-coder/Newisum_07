import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <>
      <h2 className="text-center heading">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="board">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </>
  );
};
