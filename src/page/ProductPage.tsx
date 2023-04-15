import React from "react";
import { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme, Card } from "antd";
import { IProduct } from "../type/product";
interface IProps {
  products: IProduct[];
}

const { Header, Content, Footer } = Layout;
const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};
function ProductPage(props: IProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setProducts(props.products);
  }, [props]);
  return (
    <div>
      <Layout className="layout">
        <Header></Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Card title="Card Title">
              <Card.Grid style={gridStyle}>
                {products.map((item, index) => {
                  return (
                    <div key={index}>
                      <a href={`/product/${item.id}`}>{item.name}</a>
                      <p>{item.price}</p>
                    </div>
                  );
                })}
              </Card.Grid>
            </Card>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default ProductPage;
