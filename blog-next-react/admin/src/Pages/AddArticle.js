import React, { useState } from 'react'; 
import { Row, Col ,Input, Select ,Button ,DatePicker } from 'antd'
import marked from 'marked';
import '../static/AddArticle.css';

const { Option } = Select;
const { TextArea } = Input

function AddArticle(){
  const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle,setArticleTitle] = useState('')   //文章标题
  const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introduce,setIntroduce] = useState()            //简介的markdown内容
  const [introducemd,setIntroducemd] = useState('Ready for edit') //简介的html内容
  const [showDate,setShowDate] = useState()   //发布日期
  const [updateDate,setUpdateDate] = useState() //修改日志的日期
  const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType,setSelectType] = useState(1) //选择的文章类别

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm:true,
    pedantic:false,
    sanitize:false,
    tables:true,
    breaks:false,
    smartLists:true,
    smartypants:false
  })

  const changMDContent = (e)=>{
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = (e)=>{
    setIntroduce(e.target.value)
    let html = marked(e.target.value)
    setIntroducemd(html)
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
            <TextArea className="markdown-content" rows={35} placeholder="content" onChange={changMDContent}></TextArea>
          </Col>
          <Col span={12}>
            <div className="show-html" dangerouslySetInnerHTML={{__html:markdownContent}}></div>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row>
          <Col span={24}>
            <Button size="large">temper Save</Button>
            <Button size="large" type="primary" className="button-save">Save</Button>
          </Col>
          <Col span={24}>
            <TextArea rows={4} placeholder="introduce" onChange={changeIntroduce}></TextArea>
            <div className="introduce-html" dangerouslySetInnerHTML={{__html:introducemd}}></div>
          </Col>
          <Col span={12}>
            <div className="date-select">
              <DatePicker placeholder="release date" size="large"></DatePicker>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
  )
}
export default AddArticle
