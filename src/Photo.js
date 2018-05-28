import React from 'react';

var Photo = function(props) {
  return(
    <li>
    {/*grab info for src and title from the props and pass to img element*/}
      <img src={ props.url }  alt={ props.title } />
    </li>
  )

}

export default Photo;
