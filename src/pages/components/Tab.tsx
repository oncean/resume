import React from 'react';

export default (props) => {
  let tabWidth = 80;
  if (props.tab || props.tab === 0) {
    tabWidth = props.tab;
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: tabWidth,
        }}
      >
        {props.name}：
      </div>
      <div
        style={{
          width: `calc(100% - ${tabWidth}px)`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
