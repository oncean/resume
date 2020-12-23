import React from 'react';
import { Row, Col, Divider } from 'antd';
import Dot from './Dot';

export default (props: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bolder',
        marginBottom: 20,
        paddingLeft: 5,
        paddingRight: 15,
      }}
    >
      <div
        style={{
          width: 120,
        }}
      >
        {props.time}
      </div>
      <div
        style={{
          width: 200,
        }}
      >
        {props.company}
      </div>
      <div
        style={{
          width: 120,
          textAlign: 'right',
        }}
      >
        {props.job}
      </div>
    </div>
  );
};
