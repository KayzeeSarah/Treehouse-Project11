import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';

import Search from './Search.js';
import MainNav from './MainNav.js';
import PhotoContainer from './PhotoContainer.js';

class Container extends Component {
  constructor(props) {
    super();
    /*Set initial state for photos, url and loading */
    this.state = {
      /*Set photos as an empty array*/
      photos: [],
      /*Pass search url for any results received*/
      url: props.url,
      /*Display loading indicator when array is still being fetched*/
      loading: true
    };
  }

  /*call performSearch*/
  componentDidMount(){this.performSearch()}

  /*create performSearch and use axios to call flickr api*/
  /*get flickr array using given apiKey(from config.js) and tag from the props*/
  performSearch = (tag =this.props.tag) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=8&format=json&nojsoncallback=1`)
    .then(response => {
     /*set photos as array provided, tag as the title and loading to false(for when it's not loading)*/
      this.setState({
        photos: response.data.photos.photo,
        title: tag,
        loading: false
      });
    })
    .catch(error => {
      console.log('error',error);
    });
  }
  render() {
        /*searchBar appear only if url=/search*/
    let searchInput;
    let home;
    let photoCont;

    if (this.state.url === '/search') {
      /*Call Search component*/
      /*onSearch to call on performSearch after receiving input*/
      searchInput = <Search onSearch={this.performSearch} />;
      photoCont = <PhotoContainer data={this.state.photos} title={this.state.title} loading={this.state.loading} />
    } else if (this.state.url === '/') {
      /*call home if state url = / */
      home = <h1 className="homePage"> WELCOME! </h1>
    } else {
      /*call photo container and pass data*/
      photoCont = <PhotoContainer data={this.state.photos} title={this.state.title} loading={this.state.loading} />
    }
    return (
      <div className="container">
        {/*call searchInput*/}
        {searchInput}
        {/*call navigation*/}
        <MainNav />
        {/*Call home*/}
        {home}
        {/*call photoCont*/}
        {photoCont}
      </div>
    );
  }
}

export default Container;
