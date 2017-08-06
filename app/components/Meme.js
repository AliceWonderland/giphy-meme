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
      selectedGif:props.gifs[this.props.match.params.memeId],
      memeInput:'OMG HI! ...'
    };
    this.drawMeme=this.drawMeme.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount () {
    this.drawMeme();
  }

  drawMeme(){
    console.log('meme');
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({memeInput: event.target.value.toUpperCase()});
  }

  render() {
    const result=this.state.selectedGif;
    return (
      <div className="container">
        <div className="row">&nbsp;</div>

        <div className={styles.backButton} data-tid="backButton">
         <Link to="/giphy"><i className="fa fa-arrow-left fa-3x" /></Link>
        </div>
        <h1>GIPHY Meme Generator</h1>


        {/*<webview id="foo" src="../containers/sample.html" ></webview>*/}

        {/*<div key={result.id}><img src={result.images.downsized_large.url} /></div>*/}

        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>

        <div className={styles.memediv} data-tid="container">

          <div className="row text-center">
            <a href="#" download={result.images.downsized_large.url}><img id="start-image" src={result.images.downsized_large.url} alt="" /></a>
          </div>
          <div className={styles.memetext}>{this.state.memeInput}</div>
        <div className="row">&nbsp;</div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="OMG HI!..." value={this.state.memeInput} onChange={this.handleChange} />
                <span className="input-group-btn"><button className="btn btn-default" type="button">Go!</button></span>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }









}
