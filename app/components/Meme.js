// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Meme.css';

export default class Meme extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedGifId:props.match.params.memeId,
      selectedGif:props.gifs[this.props.match.params.memeId]
    };
    this.drawMeme=this.drawMeme.bind(this);
  }

  componentDidMount () {
    this.drawMeme();
  }

  drawMeme(){
    console.log('meme');
  }

  render() {
    const result=this.state.selectedGif;
    return (
      <div className="container-fluid">
        <div className={styles.backButton} data-tid="backButton">
         <Link to="/giphy"><i className="fa fa-arrow-left fa-3x" /></Link>
        </div>
        <h2>MEME</h2>


        {/*<webview id="foo" src="../containers/sample.html" ></webview>*/}

        {/*<div key={result.id}><img src={result.images.downsized_large.url} /></div>*/}

          <div className="row text-center">

          <a href="#" download={result.images.downsized_large.url}><img id="start-image" src={result.images.downsized_large.url} alt="" /></a>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="OMG HI!..." />
                <span className="input-group-btn"><button className="btn btn-default" type="button">Go!</button></span>
              </div>
            </div>
          </div>


        </div>
    );
  }









}
