import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
    return (
        <Menu className="top__icon" mode={props.mode}>
            <Menu.Item key="products">
                <Link to="/">Products</Link>
            </Menu.Item>
        </Menu>
    );
}

export default LeftMenu;
