import type { CascaderProps } from "antd";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { getId, update } from "../api/products";
import { useNavigate, useParams } from "react-router-dom";
import { IUpdate } from "../models";
const { Option } = Select;

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Update: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();
  const fetProductId = async (id: string) => {
    const { data } = await getId(id);
    form.setFieldsValue(data);
  };
  useEffect(() => {
    if (id) {
      fetProductId(id);
    }
  }, [id]);
  const onSubmit = async (data: IUpdate) => {
    if (id) {
      const response = await update(id, data);
      console.log(response);
      navigate("/admin");
    }
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onSubmit}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <h1 className="text-2xl mx-auto text-center my-4">Sửa</h1>
      <Form.Item
        name="name"
        label="name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="thuonghieu"
        label="thuonghieu"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your thuonghieu!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="description"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your description!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="price"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your price!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="xuatxu" label="Select">
        <Select name="xuatxu">
          <Select.Option name="xuatxu" value="Việt Nam">
            Việt Nam
          </Select.Option>
          <Select.Option name="xuatxu" value="Trung Quốc">
            Trung Quốc
          </Select.Option>
          <Select.Option name="xuatxu" value="Pháp">
            Pháp
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" danger htmlType="submit">
          Sửa
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Update;
