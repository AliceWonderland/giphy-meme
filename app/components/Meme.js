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
      memeInput:'OMG ...',
      memeInput2:'I R PUPPAY ...',
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleChangeBottom=this.handleChangeBottom.bind(this);
  }



  handleChange(event) {
    // console.log(event.target.value);
    this.setState({memeInput: event.target.value.toUpperCase()});

  }

  handleChangeBottom(event) {
    // console.log(event.target.value);
    this.setState({memeInput2: event.target.value.toUpperCase()});
  }


  render() {
    // console.log(this.props);
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

        <div className={styles.memediv} data-tid="container">
          <div className={styles.memetext}>{this.state.memeInput}</div>
          <div className="row text-center">
            <a href="#" download={result.images.downsized_large.url}><img id="start-image" src={result.images.downsized_large.url} alt="" /></a>
          </div>
          <div className={styles.memetext2}>{this.state.memeInput2}</div>


          <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <input type="text" className="form-control" placeholder={this.state.memeInput} value={this.state.memeInput} onChange={this.handleChange} />


                <input type="text" className="form-control" placeholder={this.state.memeInput2} value={this.state.memeInput2} onChange={this.handleChangeBottom} />
            </div>
          </div>
        </div>


      </div>
    );
  }









}
