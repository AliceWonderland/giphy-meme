// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Giphy.css';

export default class Meme extends Component {
  constructor(){
    super();
    this.state = {
      gifs:[]
    };
  }

  componentDidMount () {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=puppy&limit=25&offset=0&rating=G&lang=en')
      .then(res => res.data)
      .then(gifs => {
        gifs=gifs.data;
        // console.log('mount',gifs);
        this.setState({ gifs });
      });
  }

  render() {
    const result=this.state.gifs[0];
    console.log('giffys',result);
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div class="flex">
          <div>uno</div>
          <div>due</div>
          <div>tre</div>
          <div>search</div>
        </div>
        <h2>GIPHY</h2>
        <div className={styles.flex} data-tid="container">
          <div key={result.id}><img src={result.images.downsized.url} /></div>
        </div>
      </div>
    );
  }
}
