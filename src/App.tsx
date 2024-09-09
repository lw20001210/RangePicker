import { useState, useEffect } from "react";
import { Button, DatePicker, Form, Space } from "antd";
import "./App.css";
import moment from "moment";
const { RangePicker } = DatePicker;
function App() {
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show === true) {
      console.log(form.getFieldValue(RangePicker));
    }
  }, [show]);
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onFill = () => {
    form.setFieldsValue({
      RangePicker: [moment(1725562983000), moment(1725562983000)],
    });
  };
  return (
    <div className="App">
      {show && (
        <Form style={{ maxWidth: 600 }} form={form} onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}>
          <Form.Item
            label="RangePicker"
            name="RangePicker"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="primary" htmlType="button" onClick={onFill}>
                回显表单数据
              </Button>
            </Space>
          </Form.Item>
        </Form>
      )}
      <Button type="primary" onClick={() => setShow(!show)}>
        {!show ? "显示表单" : "销毁表单"}
      </Button>
    </div>
  );
}

export default App;
