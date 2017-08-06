// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Giphy.css';

export default class Meme extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedGifId:this.props.match.params.memeId,
      selectedGif:this.props.gifs[this.props.match.params.memeId]
    };
  }

  componentDidMount () {
  }

  render() {
    const result=this.state.selectedGif;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>MEME</h2>
        <div className={styles.flex} data-tid="container">

          <div key={result.id}><Link to="/meme"><img src={result.images.downsized_large.url} /></Link></div>

        </div>
      </div>
    );
  }
}
