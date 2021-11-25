import React from "react";
import Wechall from '../Wechall';

class WechallRank extends React.Component {
	componentDidMount() {
		Wechall.getRanking('metalface');
	}

	render() {
		return (
			<div>
				<div id="rank" className="center">4290</div>
				<div id="text" className="center">Current Global Wechall Ranking</div>
				<div id="updated" className="center">Last updated 12/24/2021</div>
			</div>
		);
	}
}

export default WechallRank;

