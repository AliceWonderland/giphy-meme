// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Giphy.css';

export default class Giphy extends Component {
  constructor(props){
    super(props);
    this.state = {
      search:'Search for... Puppies'
    };
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount () {
    // console.log('props.gifs in mount',this.props.gifs);
    // this.setState({gifs:this.props.gifs.data});
    this.props.fetchGifs();

  }

  handleChange(event){
    this.setState({search:event.target.value});
  }

  handleClick(event){
    console.log('clicked',this.state.search);
    this.props.fetchGifs(this.state.search);
  }


  render() {

    // console.log('props in render',this.props);
    const result=this.props.gifs;
    const url=(this.props.location.pathname==='/giphystill')?'memestill':'meme';


    return (
      <div className="container">
        <div className="row">&nbsp;</div>

        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <h1>GIPHY Meme Generator</h1>

        <div className="row">
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for... Puppies" onChange={this.handleChange} />
              <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.handleClick}>Go!</button>
            </span>
            </div>
          </div>
        </div>

        <div className="row">&nbsp;</div>

        <div className={styles.flex} data-tid="container">
          {
            result.map((gif,ind) => {
              return (

                <div key={gif.id}><Link to={`/${url}/${ind}`} key={gif.id}><img src={gif.images.original.url} /></Link></div>

              );
            })
          }
        </div>
      </div>
    );
  }
}
