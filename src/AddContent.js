import React from 'react';
import './AddContent.css';
import {
    DeleteOutlined,
    DownOutlined,
    FormOutlined,
    SaveOutlined
} from '@ant-design/icons';
import { Button, Input, Select, Switch } from 'antd';
import { addNewRow, deleteRow, getID } from './action/tableAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddContent({data, cusBrand, setCusBrand, handleChange, setData, setInput}) {
    const navigate = useNavigate();

    
    const cus = useSelector(state => state.table.customers);
    const cusID = useSelector(state => state.table.customerSelectedID);
    const ind = useSelector(state => state.table.index);
    const dispatch = useDispatch();

    const BRAND = ["Apple", "SamSung", "Oppo", "Xiaomi"];
    
    const d = new Date();
    const initDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

    const deleteValue = () => {
        if (window.confirm("Bạn chắc chắn muốn xóa?") === true) {
            const remove = deleteRow(ind);
            dispatch(remove);
        } else {
            return;
        }
    }

    const getSelectedID = () => {
        navigate("/add/modify");
        const get = getID(ind, data);
        setInput(data)
        dispatch(get);
    }

    const addValue = () => {
        if (isNaN(Number(data.pid))) {
            toast.error("Mã khách hàng và mã sản phẩm khách hàng phải là số", {containerId: "number-error"});
            return;
        };
        if (!(isNaN(Number(data.pname)))) {
            toast.error("Tên phải được nhập bằng chữ", {containerId: "word-error"});
            return;
        } else {
            navigate("/homepage");
            const newValue = {
            // cnumber: customerInd,
            number: ind,
            id: cus[cusID - 1].cid,
            name: cus[cusID - 1].cname,
            index: data.pid,
            brand: cusBrand,
            itemName: data.pname,
            active: <Switch />,
            date: initDate,
            "modify-date": "",
            action: (
                <div>
                <Button id="form" onClick={() => getSelectedID()}>
                    <FormOutlined style={{ color: "white" }} />
                </Button>
                <Button id="delete" onClick={() => deleteValue()}>
                    <DeleteOutlined style={{ color: "white" }} />
                </Button>
                </div>
            ),
        };
        toast.success("Nhập thành công!", {containerId:'input-success'});
        const add = addNewRow(newValue);
        dispatch(add);
        setData("");
        }
    };

    return (
        <div className='content'>
                <div className="header">
                    <span>Chỉnh Sửa Sản Phẩm MWG</span>
                    <button onClick={() => addValue()}><SaveOutlined className='icon'/>Lưu</button>
                </div>
                <div className='name__container'>
                    
                    <div className='underline'>
                        <span className='title'><DownOutlined className='icon'/>Thông tin chung </span>
                    </div>

                    <div className='name input__container'>  
                        <label for="pname">Tên sản phẩm</label>
                        <Input className='input' placeholder='Nhập tên sản phẩm' id='pname' name='pname' value={data.pname} onChange={handleChange}></Input>
                        {/* <span className='warn'>* Nhập bằng chữ</span> */}
                    </div>
                </div>

                <div className='user__container'>
                    
                    <div className='underline'>
                        <span className='title'><DownOutlined className='icon'/>Đối Tác Toàn Tín</span>
                    </div>

                    <div className='name'>
                        
                        <div className='user'>
                            <div className='input__container space'>
                            <label for="cid">Mã khách hàng</label>
                            <Input className='input' placeholder='Nhập mã khách hàng'  id='cid' name='cid' value={cus[cusID - 1].cid}></Input>
                            <span className='warn'>* Nhập bằng số</span>
                            </div>
                            
                            <div className='input__container space'>
                            <label for="pid">Mã sản phẩm khách hàng</label>
                            <Input className='input' placeholder='Nhập mã sản phẩm khách hàng'  id='pid' name='pid' value={data.pid} onChange={handleChange}></Input>
                            {/* <span className='warn'>* Nhập bằng số</span> */}
                            </div>
                        </div>

                        <div className='user'>

                            <div className='input__container space'>
                            <label for="cname">Tên khách hàng</label>
                            <Input className='input'  placeholder='Nhập tên khách hàng' id='cname' name='cname' value={cus[cusID - 1].cname}></Input>
                            <span className='warn'>* Nhập bằng chữ</span>
                            </div>

                            <div className='input__container space'>
                            <label for="cpname">Thương Hiệu</label>
                            <Select className='input'  onChange={value => setCusBrand(value)} options={BRAND.map(brand => {
                                return {
                                    label: `${brand}`,
                                    value: brand
                                }
                            })}/>
                            {/* <Input className='input'  placeholder='Nhập tên sản phẩm khách hàng' id='cpname' name='cpname' value={data.cpname} onChange={handleChange}></Input> */}
                            {/* <span className='warn'>* Nhập bằng chữ</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default AddContent;