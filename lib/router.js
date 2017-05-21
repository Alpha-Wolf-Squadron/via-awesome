import React from 'react';
import {mount} from 'react-mounter';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//Container Wrapper
import MainContainer from '../imports/ui/containers/maincontainer.jsx'

// Front Page Container
import IntroContainer from '../imports/ui/containers/introcontainer.jsx'
//Front page!
FlowRouter.route('/',{
	name:"homepage",
	action: function(params,queryParams){
		mount(MainContainer,{
			content:()=>(<IntroContainer />)
		})
	},
})