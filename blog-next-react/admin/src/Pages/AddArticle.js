import React, { useState,useRef } from 'react'; 
import { Row, Col ,Input, Select ,Button ,DatePicker } from 'antd'
import mark from 'marked';
import '../static/AddArticle.css';

const { Option } = Select;
const { TextArea } = Input
let trackStrem;

function AddArticle(){
  const addVideo = useRef()
  const openVideo = () =>{
    const video = addVideo.current
    const videoObj = {
      video: {
          width: 320,
          height: 240
      }
    }
    console.log(video)
    video.play()
    navigator.mediaDevices.getUserMedia(videoObj).then(function (stream) {
    console.log(`video`, video)
    video.srcObject = trackStrem = stream
    video.play()
    console.log(navigator.mediaDevices)
    })
  }

  return (
  <div>
    <Row gutter={5}>
      <Col span={18}>
        <Row gutter={10}>
          <Col span={20}>
            <Input placeholder="blog title" size="large"></Input>
          </Col>
          <Col span={4}>
            <Select defaultValue="1" size="large">
              <Option value="1">videos</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <TextArea className="markdown-content" rows={35} placeholder="content"></TextArea>
          </Col>
          <Col span={12}>
            <div className="show-html"></div>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row>
          <Col span={24}>
            <Button size="large">temper Save</Button>
            <Button size="large" type="primary" className="button-save">Save</Button>
          </Col>
          <div>
          <video autoPlay id="auto-video" ref={addVideo}></video>
          <Button onClick={openVideo}>test</Button>
          </div>
        </Row>
      </Col>
    </Row>
  </div>
  )
}
export default AddArticle
