import React from 'react';
import Article from './Article';
import ChartView from './ChartView';

function Section() {
	return (
		<div className="section">
			<Article select="내 가게"/>
			<Article select="상권"/>
			<Article select="업종"/>
			<ChartView/>
		</div>
	);
}

export default Section;