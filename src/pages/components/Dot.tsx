import React from 'react';

export default (props: any) => {
  const width = 20;
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: width,
        }}
      >
        ●
      </div>
      <div
        style={{
          width: `calc(100% - ${width}px)`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
