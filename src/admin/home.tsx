import React, { useEffect, useState } from "react";
import { IProduct } from "../models";
import { getAll, remove } from "../api/products";
import { Button, message, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const HomeAdmin = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetProduct = async () => {
    const { data } = await getAll();
    setProducts(data);
  };
  useEffect(() => {
    fetProduct();
  }, []);
  const removeProduct = async (id: string) => {
    if (id) {
      const response = await remove(id);
      console.log(response);
      window.location.reload();
    }
  };
  return (
    <table className="mx-auto max-w-screen-xl w-full text-center border-separate border border-slate-400 ...">
      <thead>
        <tr>
          <th className="border border-slate-300 ...">STT</th>
          <th className="border border-slate-300 ...">Name</th>
          <th className="border border-slate-300 ...">Thương hiệu</th>
          <th className="border border-slate-300 ...">Mô tả</th>
          <th className="border border-slate-300 ...">Giá khuyến mãi</th>
          <th className="border border-slate-300 ...">Xuất xứ</th>
          <th className="border border-slate-300 ...">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr>
            <td className="border border-slate-300 ...">{index + 1}</td>
            <td className="border border-slate-300 ...">{product.name}</td>
            <td className="border border-slate-300 ...">
              {product.thuonghieu}
            </td>
            <td className="border border-slate-300 ...">
              {product.description}
            </td>
            <td className="border border-slate-300 ...">{product.price}</td>
            <td className="border border-slate-300 ...">{product.xuatxu}</td>
            <td className="border border-slate-300 ...">
              <Popconfirm
                placement="topLeft"
                title={"Có chắc là xóa k ?"}
                onConfirm={() => removeProduct(product.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>Xóa</Button>
              </Popconfirm>
              <Button danger type="primary" className="mx-4">
                <Link to={`/admin/products/${product.id}`}>Sửa</Link>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeAdmin;
