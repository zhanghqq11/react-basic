import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col, Icon, Affix, Breadcrumb} from 'antd'
import marked from 'marked'
import hljs from "highlight.js";
import MarkNav from 'markdown-navbar'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../styles/pages/detail.css'
import 'markdown-navbar/dist/navbar.css'
import 'highlight.js/styles/monokai-sublime.css';
import axios from 'axios'


const Detailed = ( props ) => {
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content) 

  return (
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

              <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}>
              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={html}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer></Footer>

  </>
  )
}

Detailed.getInitialProps = async(context)=>{
  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/getArticleById/'+id).then(
      (res)=>{
        console.log(id)
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}

export default Detailed