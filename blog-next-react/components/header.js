import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
class Header extends Component {
  constructor() {
    super()
    this.state = {
      current: 'mail',
    };
  }


    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };

    render() {
      return (
        <div>
          {/* <Affix offsetTop={this.state.top}> */}
          <Menu
            onClick={this.handleClick}
            // eslint-disable-next-line react/destructuring-assignment
            selectedKeys={[this.state.current]}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="mail">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />
              Navigation Two
            </Menu.Item>
            <SubMenu
              title={(
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  Navigation Three - Submenu
                </span>
              )}
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
          {/* </Affix> */}
          {/* <style jsx>{`
          #header{
            height:70px;
          }

          `}</style> */}
        </div>
      );
    }
}

export default Header;
