import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
import Header from '../components/Header'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <Header></Header>
      <Button type='primary'>first</Button>
    </div>
 </>
)
export default Home