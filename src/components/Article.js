import React from 'react';

function Article({scrollX}) {
	return <div className={`article ${scrollX ? 'scrollX' : ""}`}></div>
}

export default Article;