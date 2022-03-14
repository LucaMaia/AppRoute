import { Button, Col, Form, Input, Row } from "antd"

export const Login = () => {

  return(
    <Row
      justify="center"
      align="middle"
      style={{
        height:'100vh'
      }}
    >
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={()=> {}}
          >
            <Form.Item
              label="Email"
              name="email"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              wrapperCol={{offset:8 ,span: 16}}
            >
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
            
          </Form>
        </Col>
    </Row>
  )
    
}