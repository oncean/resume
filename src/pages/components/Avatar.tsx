import React from 'react';

export default (props: any) => {
  return (
    <div style={props.style}>
      <img src={require('./img.jpg')} width="100px" />
    </div>
  );
};
