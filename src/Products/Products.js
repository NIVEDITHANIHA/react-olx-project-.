import React, { useState } from "react";
import { phonesData } from "./ProductsData";
import { Card, Button } from "react-bootstrap";
const Products = () => {
  const [items, setItems] = useState(phonesData);
  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.Qty > 1 ? { ...item, Qty: item.Qty - 1 } : item
    );
    setItems(newItem);
  };
  const incQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setItems(newItem);
  };
  return (
    <div>
      <h1 className="bg-info text-white text-center"> Products</h1>
      {items.map((item) => (
        <div key={item.id} className="d-inline-flex">
          <Card
            className="shadow p-3 m-2 bg-body rounded"
            style={{ width: "12.5rem" }} >
            <Card.Img
              style={{ height: "13rem" }}
              className="p-2"
              variant="top"
              src={require(`./assets/${item.image}`)}
            />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text> {item.desc} </Card.Text>
              <h5> price : {item.price}</h5>
              <div>
                <p>
                  Qty :
                  <Button onClick={() => incQty(item.id)} className="m-1">
                   +
                  </Button>
                  {item.Qty}
                  <Button onClick={() => decQty(item.id)} className="m-1">
                    -
                  </Button>
                </p>
              </div>
              <Button variant="primary">ADD TO CART</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      ;
    </div>
  );
};
export default Products;
