// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Giphy.css';

export default class Giphy extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs:[]
    };
  }

  componentDidMount () {

  }

  render() {

    console.log('props from giphypage',this.props.gifs.data);
    const result=this.props.gifs.data;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>GIPHY</h2>
        <div className={styles.flex} data-tid="container">


          {
            result.map(gif => {
              return (


                <div key={gif.id}><Link to="/meme"><img src={gif.images.downsized.url} /></Link></div>



              );
            })
          }


        </div>
      </div>
    );
  }
}
