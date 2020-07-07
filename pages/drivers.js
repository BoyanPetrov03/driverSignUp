import { Form, Input, InputNumber, Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Demo = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="3 имена" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'egn']} label="ЕГН" rules={[{required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'licenseNumber']} label="Номер на книжка" rules={[{max: 99, required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'carProductionYear']} label="Година на произвеждане на колата">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'carModel']} label="модел на колата">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'expirence']} label="Трудов опит" rules={[{required: true}]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Готово!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default function Drivers() {
  return (
    <div>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link href="/">Начало</Link></Menu.Item>
          <Menu.Item key="2">Шофьори</Menu.Item>
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
