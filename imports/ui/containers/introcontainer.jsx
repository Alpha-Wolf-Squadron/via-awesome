import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Anime from 'react-anime';
//ES5 I Don't Care!
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

class IntroContainer extends Component {
	constructor(props){
		super(props)
	}
	startCanvas(){
	}
	render(){
		return (
			<div>
				<h1>We're Back</h1>
				<Stage width={100} height={80}>
					<Text text="Vector text" x={this.props.xposition} y={10} style={fontstyle} anchor={new PIXI.Point(0.5,0)} key="2" />
				</Stage>
			</div>
		)
	}
}

export default createContainer(()=>{
	return {
		"here":"we are"
	}
},IntroContainer);