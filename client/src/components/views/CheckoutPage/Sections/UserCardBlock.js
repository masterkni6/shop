import React from "react";

import { InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { updateCart } from "../../../../_actions/user_actions";
import Axios from "axios";

function UserCardBlock(props) {
    const dispatch = useDispatch();
    const [amount, setAmount] = React.useState(0);
    const [cartChanges, setCartChanges] = React.useState({});

    const renderCartImage = images => {
        if (images.length > 0) {
            let image = images[0];
            return `http://localhost:5000/${image}`;
        }
    };

    function updateAllCart(event) {
        if (Object.keys(cartChanges).length !== 0) {
            console.log(cartChanges);
            dispatch(updateCart(cartChanges));
            window.location.reload(false);
        }
    }

    const renderItems = () =>
        props.products &&
        props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <a href={"/product/" + product._id}>{product.title}</a>
                </td>
                <td>{product.quantity}</td>
                <td id={product._id}>${product.price} </td>
            </tr>
        ));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{renderItems()}</tbody>
            </table>
        </div>
    );
}

export default UserCardBlock;
