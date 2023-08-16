import React from 'react';
import './Header.css';
import {Select, Input} from "antd";
import {
    PlusCircleOutlined,
    SearchOutlined,
    SnippetsFilled,
    MenuOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchValue } from './action/tableAction';

function Header({logOut, brand, setBrand, filter, handleInput}) {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const searchVal = () => {
        const search = searchValue(filter, brand.toUpperCase());
        dispatch(search);
    }

    const index = [ "test", "test1", "test2", "test3"];
    
    const BRAND = ["", "Apple", "SamSung", "Oppo", "Xiaomi"];
    return (
        <header className="Header">

            <div className=" Upper">
                <nav className='menu'>
                    <span className='menu-word' onClick={() => navigate("/customer")}>Khách hàng</span>
                    <span className='menu-word'>Sản Phẩm</span>
                    <span className='menu-word' onClick={logOut}>Đăng xuất</span>
                    <span id='menu-icon'><MenuOutlined /></span>
                </nav>
                <button onClick={() => navigate("add")}><PlusCircleOutlined className="icon" />Thêm mới</button>
            </div>
            
            <div className="Lower">
                <Input placeholder="Vui lòng nhập tên hoặc mã" onChange={handleInput}></Input>
                <Select mode="multiple" placeholder="" className="Select" options={index.map(indice => {
                    return {
                        label: `${indice}`,
                        value: indice
                    }
                })}></Select>
                <Select onChange={(value) => {
                    setBrand(value);
                }} placeholder="Chọn thương hiệu" className="Select" options={BRAND.map(brand =>{
                    return {
                        label: `${brand}`,
                        value: brand,
                    };
                })}></Select>
                <div className='button-container'>
                <button id="search" onClick={() => searchVal()}><SearchOutlined className="icon" />Tìm kiếm</button>
                <button id="ex"><SnippetsFilled className="icon" />Xuất excel</button>
                </div>
            </div>

        </header>
    );
}

export default Header;