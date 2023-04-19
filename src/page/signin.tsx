import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ISignin } from "../models";
import { signin } from "../api/auth";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async (data: ISignin) => {
    try {
      const reponse = await signin(data);
      navigate("/admin");
      console.log(reponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      form={form}
      name="register"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-rose-100 flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="w-[500px] bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
                <svg
                  className="absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <h1 className="text-2xl text-center my-10 font-semibold text-gray-900">
                  Welcome back!
                </h1>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ background: "blue" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
                <a
                  href="#"
                  className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Signin;
