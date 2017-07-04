import { createStore, compose, combineReducers } from 'redux';
import rootReducer, { bgStore, appStore } from './reducers/index.js';

const inititalState = {
  currentTab: 1234567,
  slots:[{
    divExists: false,
    divId: "ad-div-ros_300x250_btm",
    name: "ROS_300x250_BTM",
    path: "/33049290/GREATIST/ROS_300x250_BTM",
    targeting: [{
      key: 'keywords',
      val: ['science', 'space', 'aliens']
    },
    {
      key: 'type',
      val: ['article']
    }],
    slotIdent: "1423423-ad-div-ros_300x250_btm"
  },{
    divExists: true,
    divId: "ad-div-ros_flex_300x600",
    name: "ROS_Flex_300x250_300x600",
    path: "/33049290/GREATIST/ROS_Flex_300x250_300x600",
    targeting: [{
      key: 'keywords',
      val: ['science', 'space', 'aliens']
    },
    {
      key: 'type',
      val: ['article']
    }],
    slotIdent: "1423423-ad-div-ros_flex_300x600",
    isRefreshed: true,
  },{
    divExists: true,
    divId: "ad-div-ros_flex_300x250",
    name: "ROS_Flex_300x250_300x600",
    path: "/33049290/GREATIST/ROS_Flex_300x250_300x600",
    targeting: [{
      key: 'keywords',
      val: ['science', 'space', 'aliens']
    },
    {
      key: 'type',
      val: ['article']
    }],
    slotIdent: "1423423-ad-div-ros_flex_300x250",
    isRefreshed: true,
  }]
};


export default function(type) {
  if(type === 'bgStore') return createStore(bgStore)
  return createStore(appStore,inititalState);
};