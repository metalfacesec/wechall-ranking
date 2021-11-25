import React from "react";

import '../css/WechallRank.css';

class WechallRank extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			rating: '....',
			lastUpdated: this.getDateString()
		}

		this.updateRank = this.updateRank.bind(this);
	}

	getDateString() {
		return `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric"})}`;
	}

	updateRank() {
		fetch(`http://localhost:8085/api/rank?profile=${this.props.profile}`, {crossDomain:true})
		.then(response => response.json())
		.then(response => {
			if (typeof response.data !== "string") {
				return;
			}

			this.setState({rating: response.data, lastUpdated: this.getDateString()});
		})
		.catch(err => {
			console.log(err);
		});
	}

	componentDidMount() {
		this.updateRank();
	}

	render() {
		return (
			<div>
				<div id="rank" className="center">{this.state.rating}</div>
				<div id="text" className="center">Current Global Wechall Ranking For {this.props.profile}</div>
				<div id="updated" className="center">Last updated {this.state.lastUpdated}</div>
			</div>
		);
	}
}

export default WechallRank;