// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactApp from './ReactApp';
import { Scene } from './Scene';
import { Canvas } from './Canvas';
import { App } from './App';
import { WebXR } from './WebXR';
import { Engine } from './Engine';

const app = new App(new Scene(), new Canvas(), new WebXR(), new Engine());

// ReactDOM.render(
//     <ReactApp />,
//     document.getElementById('root')
// )