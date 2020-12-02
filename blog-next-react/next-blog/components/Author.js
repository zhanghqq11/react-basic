import {Avatar,Divider} from 'antd'
import '../styles/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src=""/></div>
            <div className="author-introduction">
                this is a lazy boy.
                <Divider>Social account</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author