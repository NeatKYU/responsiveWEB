import React from 'react';

//components
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Section from './components/Section';

//css
import './css/App.css';
import "./css/Section.css";
import './css/Header.css';
import "./css/Footer.css";
import "./css/Aside.css";
import "./css/Article.css";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Aside></Aside>
			<Section /* 3개의 article이 들어있음 */></Section>
			<Footer></Footer>
		</div>
	)
}

export default App;