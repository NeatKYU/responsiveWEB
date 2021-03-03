import React from "react";

function ArticleEle({ visible }) {
  return (
    <div
      className="element"
      style={{ display: `${visible ? "block" : "none"}` }}
    >
      ArticleEle
    </div>
  );
}

export default ArticleEle;
