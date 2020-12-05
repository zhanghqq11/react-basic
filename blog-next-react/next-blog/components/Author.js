import {Avatar,Divider} from 'antd'
import '../styles/components/author.css'
import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src=""/></div>
            <div className="author-introduction">
                this is a lazy boy.
                <Divider>Social account</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author