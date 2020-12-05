import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col, Icon, Breadcrumb} from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../styles/pages/detail.css'

const Detailed = () => (
  <>
    <Head>
      <title>Blog detail</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <div>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">Main</a></Breadcrumb.Item>
              <Breadcrumb.Item>videos</Breadcrumb.Item>
              <Breadcrumb.Item>xxxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div>
            <div className="detailed-title">
            this is a dtail title
            </div>

            <div className="list-icon center">
              <span><Icon type="calendar" /> 2019-06-28</span>
              <span><Icon type="folder" /> videos</span>
              <span><Icon type="fire" /> 5498 person</span>
            </div>

            <div className="detailed-content" >
              this is dtailed
            </div>
          </div>
        </div>
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
    <Footer></Footer>

 </>
)

export default Detailed