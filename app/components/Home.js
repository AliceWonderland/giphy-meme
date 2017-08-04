// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <ul>
            <li><Link to="/counter">to Counter</Link></li>
            <li><Link to="/giphy">to giphy</Link></li>
          </ul>



          {/*https://api.giphy.com/v1/gifs/trending?api_key=f4ee250fb7fc4ccf88cc2260099165c8&limit=25&rating=G*/}

        </div>
      </div>
    );
  }
}
