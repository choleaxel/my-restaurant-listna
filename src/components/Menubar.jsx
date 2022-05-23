import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { UserContext } from "../App";
import { PlusCircleOutlined, QuestionCircleOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";


const { Item } = Menu;

export default function Menubar () { 
    let navigate = useNavigate()
    const { user } = useContext(UserContext)
    return (
        <Menu theme='dark' mode= 'horizontal'>
        <Item key='home' onClick={() => navigate('/')}
        icon={<HomeOutlined style={{fontSize: '1.8em'}}/>}></Item>
        <Item key='add' onClick={() => navigate('/add')}
        icon={<PlusCircleOutlined style={{fontSize: '1.8em'}}/>}></Item>
        {user && <Item key='random' 
        icon={<QuestionCircleOutlined style={{fontSize: '1.8em'}}/>}/>}
        </Menu>
    )
};

//Menu.Item, Item is a sub-component of the Menu component.
