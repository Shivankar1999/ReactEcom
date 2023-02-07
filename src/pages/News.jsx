import React, { useContext } from "react";
import styles from "../styles/news.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData";

const News = () => {
  const { news } = useContext(GlobalContant);
  console.log(news);
  return (
    <div className={styles.newsContainer}>
      {news.map((ele) => {
        return (
          <div className={styles.newsbox}>
            <div className={styles.newsImg}>
              <img src={ele.urlToImage} alt="news data" />
            </div>
            <div className={styles.content}>
              <h3>
                {ele.title} <span>{ele.publishedAt}</span>
              </h3>
              <p>{ele.content}</p>
              <bold>{ele.author}</bold>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
