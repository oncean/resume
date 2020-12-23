import React from 'react';
import styles from '../index.less';

export default (props: any) => {
  let top = 20;
  if (props.top || props.top === 0) {
    top = props.top;
  }
  return (
    <div
      style={{
        paddingTop: top,
      }}
    >
      <div
        style={{
          backgroundColor: '#f6f6f6',
          borderRadius: 5,
        }}
      >
        <span
          className={styles.colorBack}
          style={{
            fontSize: 16,
            display: 'inline-block',
            padding: '5px 10px',
            borderRadius: 5,
          }}
        >
          {props.title}
        </span>
      </div>
      <div
        style={{
          paddingTop: 10,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
