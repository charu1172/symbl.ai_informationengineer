import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const API_ENDPOINT =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=27ef942b38e14cc39a5e4a76be933396";
const Home = () => {
  const [news, setnews] = useState([]);

  const fetchurl = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const articles = data.articles;
      setnews(articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchurl(`${API_ENDPOINT}`);
  }, []);

  return (
    <div className="home_body">
      <div className="news_cont">
        <h1 className="main_heading">NEWS</h1>
      </div>
      <div className="home_maincont">
        {news.map((item) => {
          const { urlToImage, author, title, url, publishedAt } = item;
          return (
            <div className="home_cont">
              <img alt={urlToImage} src={urlToImage}></img>
              <div className="content_cont">
                <p className="author">{author}</p>
                <p className="title">{title}</p>
                <a href={`${url}`}>Read More</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
