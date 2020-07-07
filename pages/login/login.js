import { Form, Input, Button, Checkbox } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const Demo = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Име"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Парола"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Запомни ме</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Влез
        </Button>
      </Form.Item>
    </Form>
  );
};

export default function Login () {
  return (
    <div>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
          <Menu.Item key="1"><Link href="/">Начало</Link></Menu.Item>
          <Menu.Item key="2"><Link href="/drivers">Шофьори</Link></Menu.Item>
          <Menu.Item key="3"><Link href="/login/login">Влез</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Demo />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Записване на шофьори ©2020</Footer>
    </Layout>

    </div>
  );
}
