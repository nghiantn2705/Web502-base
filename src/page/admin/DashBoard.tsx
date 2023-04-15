import React from 'react'
import { useState,useEffect } from 'react'
import { IProduct } from '../../type/product'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Modal } from 'antd';
import { ICategory } from '../../type/category';
interface IProps{
  products: IProduct[];
  categorys : ICategory[];
  onRemove: (id: number) => void;
}

const DashBoard = (props: IProps) => {
  
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const showDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
  };
  const removeProduct = (id: number) => {
    Modal.confirm({
      title: 'Xác nhận xóa sản phẩm',
      content: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      okText: 'Đồng ý',
      cancelText: 'Hủy',
      onOk: () => {
        showDeleteModal()
        props.onRemove(id);
      },
      onCancel: () => {
        handleCancelDelete()
      },
    });
      
  }
  interface DataType {
    id: number;
    key:any;
    name: string;
    price: number;
    cateId:number;

}
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'cateId',
      key: 'cateId',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a href={`/admin/product/${record.id}/update`}>Update</a>
          <a onClick={()=>{removeProduct(record.id)}}>Delete</a>
        </Space>
      ),
    },
  ];
  const data: DataType[] = props.products.map((item)=>{
    return {
      key: item.id,
      ...item
    }
  })
  return  <Table columns={columns} dataSource={props.products} />
}

export default DashBoard