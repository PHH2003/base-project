import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ISignup } from "../models";
import { signup } from "../api/auth";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async (data: ISignup) => {
    try {
      const reponse = await signup(data);
      navigate("/signin");
      console.log(reponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onSubmit}
      className=""
      style={{ border: "5px 5px 5px gray", textAlign: "center" }}
      scrollToFirstError
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
              <div className="px-5 pt-4 pb-8 bg-white rounded-tr-4xl">
                <h1 className="text-2xl mb-10 font-semibold text-gray-900">
                  Đăng kí
                </h1>
                <Form.Item
                  name="Name"
                  label="Name"
                  tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your nickname!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Button
                  type="primary"
                  style={{ background: "blue" }}
                  htmlType="submit"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
