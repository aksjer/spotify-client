import { parse } from 'query-string';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { getAccessToken } from './services/auth';
import * as serviceWorker from './serviceWorker';
import { getSpotifyCode } from './spotify-connect';

const access_token = sessionStorage.getItem('access_token');
const { code } = parse(window.location.search);
if (!access_token && !code) {
  getSpotifyCode();
}
if (code) {
  getAccessToken(code as string);
} else {
  render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
