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
                <td>
                    <InputNumber
                        min={1}
                        max={99}
                        defaultValue={product.quantity}
                        onChange={value => {
                            let newChanges = {};

                            for (const v in cartChanges) {
                                newChanges[v] = cartChanges[v];
                            }
                            newChanges[product._id] = value;
                            setCartChanges(newChanges);

                            /*
                            dispatch(updateCart(product._id, value)).then(() => {
                                Axios.get("/api/users/userCartInfo").then(response => {
                                    if (response.data.success) {
                                        if (response.data.carts[0].length <= 0) {
                                            props.setShowTotal(false);
                                        } else {
                                            // a hack 
                                            let cartDetail = response.data.carts[0];
                                            let cart = response.data.carts[1];
                                            for (let i = 0; i < cart.length; i++) {
                                                cartDetail[i].quantity = cart[i].quantity;
                                            }
                                            props.calculateTotal(cartDetail);
                                        }
                                    } else {
                                        alert("Failed to get cart info");
                                    }
                                });
                            });
                            */
                        }}
                    />
                    <button onClick={() => props.removeItem(product._id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
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
                        <th>Edit Cart</th>
                    </tr>
                </thead>
                <tbody>{renderItems()}</tbody>
            </table>
            <button onClick={updateAllCart} className="float-left">
                Update Cart
            </button>
        </div>
    );
}

export default UserCardBlock;
