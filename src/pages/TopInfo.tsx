import React from 'react';
import Avatar from './components/Avatar';
import { Row, Col } from 'antd';
import { MobileFilled, MailFilled, EnvironmentFilled } from '@ant-design/icons';
import styles from './index.less';
import { widthPadding, commonPadding } from './Constants';

export default () => {
  return (
    <Row
      style={{
        position: 'relative',
      }}
    >
      <Col
        className={styles.colorBack}
        span={10}
        style={{
          padding: 20,
          paddingLeft: widthPadding,
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          王伟康
        </div>
        <div>求职意向：开发工程师</div>
      </Col>
      <Col
        style={{
          backgroundColor: '#f6f6f6',
          padding: 10,
          paddingLeft: 30,
          lineHeight: '30px',
        }}
        span={14}
      >
        <div style={{}}>
          <MobileFilled className={styles.iconTop} />
          <span>17612520975</span>
        </div>
        <div>
          <MailFilled className={styles.iconTop} />
          <span>wangsheng_me@icloud.com</span>
        </div>
        <div>
          <EnvironmentFilled className={styles.iconTop} />
          <span>江苏 南京</span>
        </div>
      </Col>
      <Avatar
        style={{
          position: 'absolute',
          bottom: 20,
          right: widthPadding,
        }}
      />
    </Row>
  );
};
