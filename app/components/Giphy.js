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
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount () {
    // console.log('props.gifs in mount',this.props.gifs);
    // this.setState({gifs:this.props.gifs.data});
    this.props.fetchGifs();

  }

  handleChange(){
    // console.log('clicked');
    this.props.selectGif('tee');
  }

  handleClick(){
    // console.log('clicked');
    this.props.selectGif('tee');
  }


  render() {

    console.log('props in render',this.props);
    const result=this.props.gifs;
    const url=(this.props.location.pathname==='/giphystill')?'memestill':'meme';

  //
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return <UserGreeting />;
  //   }
  //   return <GuestGreeting />;
  // }

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
              <input type="text" className="form-control" placeholder="Search for... Puppies" />
              <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
            </div>
          </div>
        </div>

        <div className="row">&nbsp;</div>

        <div className={styles.flex} data-tid="container">
          {
            result.map((gif,ind) => {
              return (

                <div key={gif.id}><Link to={`/${url}/${ind}`}><img src={gif.images.original.url} /></Link></div>

              );
            })
          }
        </div>
      </div>
    );
  }
}
