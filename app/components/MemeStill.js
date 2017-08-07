
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
      memeInputX:0,
      memeInputY:0,
      memeInput2X:0,
      memeInput2Y:0,
      filename:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleChangeBottom=this.handleChangeBottom.bind(this);
    this.drawMeme=this.drawMeme.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount () {
    this.drawMeme();
  }

  drawMeme(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("memeholder");
    ctx.drawImage(img, 10, 10);


    ctx.font="20px Georgia";
    ctx.fillText(this.state.memeInput,10,50);

    ctx.font="30px Verdana";
// Create gradient
    var gradient=ctx.createLinearGradient(0,0,c.width,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
// Fill with gradient
    ctx.fillStyle=gradient;
    ctx.fillText(this.state.memeInput2,10,90);

    var dataURL = c.toDataURL();
    this.setState({filename:dataURL});



  }


  handleChange(event) {
    // console.log(event.target.value);
    this.setState({memeInput: event.target.value.toUpperCase()});
    this.drawMeme();

  }

  handleChangeBottom(event) {
    // console.log(event.target.value);
    this.setState({memeInput2: event.target.value.toUpperCase()});
    this.drawMeme();
  }

  handleClick(event){
    console.log('clicked',event);

  }


  downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
  }


  render() {
    console.log(this.props);
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
          <canvas id="myCanvas" width={result.images.downsized_large.width} height={result.images.downsized_large.height}>
            Your browser does not support the HTML5 canvas tag.
          </canvas>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <input type="text" className="form-control" placeholder={this.state.memeInput} value={this.state.memeInput} onChange={this.handleChange} />


              <input type="text" className="form-control" placeholder={this.state.memeInput2} value={this.state.memeInput2} onChange={this.handleChangeBottom} />
            </div>
          </div>
          <p><a href={this.state.filename} download='meme.png'><button>Download</button></a></p>
        </div>



        <div className={styles.hideme}><img id="memeholder" src={result.images.downsized_large.url} /></div>

      </div>
    );
  }









}



