import React from 'react';
import { Row, Col, Divider } from 'antd';
import Dot from './Dot';

const titleStyle = {
  fontWeight: 'bold',
};
export default (props: any) => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={5}>
          <div style={titleStyle}>{props.time}</div>
        </Col>
        <Col span={19}>
          <div style={titleStyle}>{props.name}</div>
          <div>{props.children}</div>
          <Divider />
        </Col>
      </Row>
    </div>
  );
};
