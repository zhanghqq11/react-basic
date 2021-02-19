import React, {useState,useEffect} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import {Row, Col, Menu} from 'antd';
import '../styles/components/header.css';
import {BookOutlined, ClusterOutlined, MessageOutlined, HomeOutlined} from '@ant-design/icons'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result);
        }

        fetchData();
    }, []);

    const handleClick = (e)=>{
        if(e.key == 0){
            Router.push('/index')
        }else{
            Router.push('/list?id=' + e.key)
        }
    }

    const iconHash = {
        'blog' : <BookOutlined />,
        'abstract' : <ClusterOutlined />,
        'other' : <MessageOutlined />
    }
    return (
        <div className="header">
        <Row type="flex" justify="center">
            <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <Link href={{pathname:'/index'}}>
                <a className="header-logo">黄芪张</a>
            </Link>
                <span className="header-txt">公众号：XXXX</span>
            </Col>
    
            <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                <Menu  
                    mode="horizontal"
                    onClick={handleClick}>
                    <Menu.Item key="0">
                    <HomeOutlined />
                        主页
                    </Menu.Item>
                    {
                        navArray.map((item)=>{
                            return(
                                <Menu.Item key={item.id}>
                                {iconHash[item.icon]}
                                {item.typeName}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Col>
        </Row>
        </div>  
    )
}

  export default Header;