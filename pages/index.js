
import { Layout, Menu, Breadcrumb } from 'antd';
import Head from 'next/head';
import Link from 'next/link';


const { Header, Content, Footer } = Layout;

export default function Home() {
  return(
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Начало</Menu.Item>
          <Menu.Item key="2"><Link href="/drivers">Шофьори</Link></Menu.Item>
          <Menu.Item key="3"><Link href="/login/login">Влез</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div className="site-layout-content"><h1>Добре дошли в сайта за регистрация на шофьори!</h1> <h3>Ще се радваме да се присъедините към екипа!</h3></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Записване на шофьори ©2020</Footer>
    </Layout>
  );
}
