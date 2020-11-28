import React from 'react';
import '../styles/components/header.css';

import {Row, Col, Menu} from 'antd';
import {BookOutlined, ClusterOutlined, MessageOutlined} from '@ant-design/icons'

const Header = () => (
    <div className="header">
      <Row type="flex" justify="center">
          <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
              <span className="header-logo">黄芪张</span>
              <span className="header-txt">公众号：XXXX</span>
          </Col>
  
          <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
              <Menu  mode="horizontal">
                  <Menu.Item key="home">
                  <BookOutlined />
                      博客
                  </Menu.Item>
                  <Menu.Item key="video">
                  <ClusterOutlined />
                      书籍梗概
                  </Menu.Item>
                  <Menu.Item key="life">
                  <MessageOutlined />
                      其他
                  </Menu.Item>
              </Menu>
          </Col>
      </Row>
   </div>
  )

  export default Header;