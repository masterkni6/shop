import React, { useEffect, useState } from "react";
import { Button, Descriptions, InputNumber } from "antd";

function ProductInfo(props) {
    const [Product, setProduct] = useState({});

    useEffect(() => {
        setProduct(props.detail);
    }, [props.detail]);

    const addToCartHandler = () => {
        props.addToCart(props.detail._id, props.amount);
    };

    const onAmountChange = value => {
        props.setAmount(value);
    };

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> ${Product.price}</Descriptions.Item>
                <Descriptions.Item label="Total Left">Todo</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <div className="input-group mb-3" style={{ justifyContent: "center" }}>
                <InputNumber min={1} max={99} defaultValue={1} onChange={onAmountChange} />
            </div>

            <br />

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" shape="round" type="danger" onClick={addToCartHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo;
