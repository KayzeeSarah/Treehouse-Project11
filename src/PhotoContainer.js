import React from 'react';
import Photo from './Photo.js';
import ImageNotFound from './ImageNotFound';


var PhotoContainer = function(props) {
  /*take data from props*/
  var data = props.data;
  let photos;

  if (data.length > 0) {
    /*if array.length more than one(received array), set photos as array*/
    /*go through each object in array and display each object in photo*/
    /* pass props --> url of photo and key for id*/
    photos = data.map( photo =>
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
             key={photo.id}
       />
    );
  } else {
    /*if array.length = 0(don't receive array) , display PhotoNotFound*/
    photos = <ImageNotFound />;
  }

  return(
    <div className="photo-container">
      <h2>{props.title /*take props.title as title*/}</h2>
      <ul>
        {
    /*if loading= true, display 'loading', if not, call photos*/
          (props.loading)
          ? <p className="load">LOADING . . .</p>
          : photos
        }
      </ul>
    </div>

  );
}

export default PhotoContainer;
