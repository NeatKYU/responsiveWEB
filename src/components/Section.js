import React from 'react';
import Article from './Article';
import ChartView from './ChartView';

function Section() {
	return (
		<div className="section">
			<Article />
			<Article />
			<ChartView/>
		</div>
	);
}

export default Section;