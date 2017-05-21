import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Anime from 'react-anime';

class MainContainer extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<header className="navigation background8 sitefont1 fntcolor1" id="coolheader">
				<Anime scale={[0,1]} delay={(e, i) => i * 300}>
					<h1 className="fntspacingsmall">CRAZY BUS</h1>
				</Anime>
				</header>
				<main>
					{this.props.content()}
				</main>
			</div>
		)
	}
}

export default createContainer((content)=>{
	return {
		yourcontent:content,
		"here":"we are"
	}
},MainContainer);