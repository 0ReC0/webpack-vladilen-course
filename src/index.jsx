// import * as $ from 'jquery'
import Post from "@models/Post";
import '@/styles/styles.css';
import '@/styles/less.less'
import '@/styles/scss.scss'
import './babel'
import React from 'react';
import { createRoot } from 'react-dom/client';
// import json from "@/assets/json"
// import xml from '@/assets/data.xml'
// import csv from '@/assets/data.csv'
import webpackLogo from "@/assets/webpack-logo.png";

const post = new Post('Webpack', webpackLogo)

// $('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack</h1>

    <hr />

    <div className="logo" />

    <hr />

    <pre />

    <hr />

    <div className="box">
      <h2>Less</h2>
    </div>

    <hr />

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

createRoot(document.getElementById('app')).render(<App />)

// console.log('Post', post.toString())

// console.log(json)
// console.log(xml);
// console.log(csv);
