// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Giphy.css';

export default class Giphy extends Component {
  constructor(props){
    super(props);
    console.log('props from dispatch',props);
    this.state = {
      gifs:[]
    };
  }

  componentDidMount () {

    // console.log('props.gifs in mount',this.props.gifs);
    // this.setState({gifs:this.props.gifs.data});
    this.props.fetchGifs();

    console.log('props in mount',this.props);
  }

  render() {

    console.log('props in render',this.props.gifs, 'state');
    const result=this.props.gifs;

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
