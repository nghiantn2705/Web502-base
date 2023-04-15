import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { IProduct } from '../type/product'
import { Card, Col, Row } from 'antd';
interface IProps{
    products :IProduct[]
}

const ProductDetail = (props: IProps) => {
    const {id} =  useParams();
    const product = props.products.find(item => item.id == Number(id))
  return (
    <div> <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        {product?.name}
        {product?.price}
      </Card>
    </Col>
    
  </Row></div>
  )
}

export default ProductDetail