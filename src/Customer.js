import React, { useRef } from 'react';
import './Customer.css';
import {
    PlusCircleOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addCustomer, chooseCustomer } from './action/tableAction';

function Customer({customer, setCustomer, getCustomer, logOut})  {

    const menuNav = () => {
        document.getElementById('menu-icon').style.animation = "spin 2s linear" ;
        document.querySelector('.dropdown-menu').classList.toggle("visible");
    }

    const cusList = useSelector(state => state.table.cid);
    const cindex = useSelector(state => state.table.customerIndex);
    const customerData = useSelector(state => state.table.customers)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const idRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);

    const regex = /^(09|08|03|07|05)[0-9]{8}$/igm

    const getCusID = () => {
        const get = chooseCustomer(cindex);
        dispatch(get);
        navigate("/homepage");
    }

    const addCustomerToTable = () => {
        if (cusList.length === 0) {
            if (isNaN(customer.cid) || !isNaN(customer.cname)) {
                document.getElementById("hidden").style.display = 'inline';
                document.getElementById("hidden1").style.display = 'inline';
                idRef.current.value = '';
                nameRef.current.value = '';
                phoneRef.current.value = '';
                return;
            } else {
                const newCustomer = {
                    index: cindex,
                    cid: customer.cid,
                    cname: customer.cname,
                    phone: customer.phone,
                    act: (
                        <div className='customer-btnContainer'>
                            <button onClick={() => getCusID()}>Add</button>
                        </div>
                    )
                }
                if (regex.test(customer.phone) === false) return alert("Số điện thoại không hợp lệ");
                const addCus = addCustomer(newCustomer, customer.cid);
                dispatch(addCus);
                setCustomer("");
                idRef.current.value = '';
                nameRef.current.value = '';
                phoneRef.current.value = '';
                document.querySelector(".customer-form-container").classList.remove("openBtn");
                document.getElementById("hidden").style.display = 'none';
                document.getElementById("hidden1").style.display = 'none';
            }
        } else {
            for (let i = 0; i < cusList.length; i++) {
                if (cusList[i] === customer.cid) return alert("Id khách hàng đã tồn tại!!!") 
        }
            if (isNaN(customer.cid) || !isNaN(customer.cname)) {
                document.getElementById("hidden").style.display = 'inline';
                document.getElementById("hidden1").style.display = 'inline';
                idRef.current.value = '';
                nameRef.current.value = '';
                phoneRef.current.value = '';
                return;
            } else {
                const newCustomer = {
                    index: cindex,
                    cid: customer.cid,
                    cname: customer.cname,
                    phone: customer.phone,
                    act: (
                        <div className='customer-btnContainer'>
                            <button onClick={() => getCusID()}>Add</button>
                        </div>
                    )
                }
                if (regex.test(customer.phone) === false) return alert("Số điện thoại không hợp lệ");
                const addCus = addCustomer(newCustomer, customer.cid);
                dispatch(addCus);
                setCustomer("");
                idRef.current.value = '';
                nameRef.current.value = '';
                phoneRef.current.value = '';
                document.querySelector(".customer-form-container").classList.remove("openBtn");
                document.getElementById("hidden").style.display = 'none';
                document.getElementById("hidden1").style.display = 'none';
            }    
        }
    }

    const columns = [
        {
            key: 'cid',
            title: 'Mã Khách Hàng',
            dataIndex: 'cid',
            width: '25%'
        },
        {
            key: 'cname',
            title: 'Tên Khách Hàng',
            dataIndex: 'cname',
            width: '25%'
        },
        {
            key: 'phone',
            title: 'Số điện thoại',
            dataIndex: 'phone',
            width: '25%'
        },
        {
            key: 'act',
            title: 'Hành động',
            dataIndex: 'act'
        }
    ]

    return(
        <div>
            <div className="customer-form-container">
                <div className="customer-form-window">
                    <div className='customer-form-wrapper'>
                        <h2>Nhập Thông Tin Khách Hàng</h2>
                        
                        <div className='customer-input__container'>
                                
                            <div className='customer-input'>
                                <input name='cid' ref={idRef} placeholder='Mã khách hàng' onChange={getCustomer}></input>
                                <span className='hidden' id='hidden'>* Nhập bằng số</span>
                            </div>
                            <div className='customer-input'>
                                <input name='cname' placeholder='Tên khách hàng' ref={nameRef} onChange={getCustomer}></input>
                                <span className='hidden' id='hidden1'>* Nhập bằng chữ</span>
                            </div>
                            
                            <div className='customer-input'>
                                <input name='phone' placeholder='Số điện thoại' ref={phoneRef} onChange={getCustomer}></input>
                            </div>
                        </div>

                        <div className='btn__container'>
                                <button type='button' id='submitCustomer' onClick={() => addCustomerToTable()}>Submit</button>
                                <button type='button' id='cancelCustomer' onClick={() => {document.querySelector(".customer-form-container").classList.remove("openBtn")}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Upper">
                <nav className='menu'>
                    <span className='menu-word'>Khách hàng</span>
                    <span className='menu-word'>Sản Phẩm</span>
                    <span className='menu-word' onClick={logOut}>Đăng xuất</span>
                    <span id='menu-icon' onClick={() => menuNav()}><MenuOutlined /></span>
                </nav>
                <button  onClick={() => {document.querySelector(".customer-form-container").classList.add("openBtn")}}><PlusCircleOutlined className="icon"/>Thêm mới</button>
            </div>

            <div className='dropdown-menu'>
                        <span className='dropdown__menu-word'>Khách hàng</span>
                        <span className='dropdown__menu-word'>Sản Phẩm</span>
                        <span className='dropdown__menu-word' onClick={logOut}>Đăng xuất</span>
            </div>

            <div className="table">
                <Table columns={columns} dataSource={customerData} pagination={false}/>
            </div>
        </div>
    );
}

export default Customer;