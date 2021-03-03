import React, { useState, useRef } from "react";
import ArticleEle from "./ArticleEle";
import "./Article.scss";

function Article({ select }) {
  const [visible, setVisible] = useState(false);
  const HandleClick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div
        className="article"
        onClick={HandleClick}
      >
        <div>다른 x요일 대비 <br/> 오늘
          <span style={{color:"blue"}}>
            {select}
          </span> 매출</div>
        </div>
      <ArticleEle visible={visible} />
    </div>
  );
}

export default Article;
