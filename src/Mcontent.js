import React from 'react';
import { useSelector } from 'react-redux';
import { Input, Select, Switch } from 'antd';
import {
    DownOutlined
} from '@ant-design/icons';
import './Mcontent.css';

function Mcontent({setCusBrand, input, getInput}) {

    const cus = useSelector(state => state.table.customers);
    const cusID = useSelector(state => state.table.customerSelectedID);

    const BRAND = ["Apple", "SamSung", "Oppo", "Xiaomi"];

    const LANGUAGES = ["Việt Nam", "Anh", "Trung Quốc", "Nga", "Nhật" ];
    return (
        <div className='mcontent'>
            
            <div>
                <div className='info underline'>
                    <button>Thuộc Tính</button>
                    <button>Lịch Sử</button>
                </div>
                <div className='product-info__container'>

                    <div className='img'>
                        <img src='' alt='NO IMAGE AVAILABLE'></img>
                    </div>

                    <div className='product-info vertical'>
                        <span>Mã: </span>
                        <span className='yellow'>Test1111999</span>
                        <span>Danh Mục: </span>
                        <span>Kích hoạt: <Switch/></span>
                    </div>

                    <div className='product-info vertical'>
                        <span>Họ sản phẩm: </span>
                        <span>Ngôn Ngữ: <Select className='select' options={LANGUAGES.map(language => {
                            return {
                                label: `${language}`,
                                value: language
                            }
                        })}/></span>
                    </div>
                </div>
            </div>

            <div className='name__container'>
                
                <div className='underline'>
                    <span className='title'><DownOutlined className='icon'/>Thông tin chung 1112211777</span>
                </div>

                <div className='name input__container'>  
                    <span>Tên sản phẩm</span>
                    <Input className='input' id='pname' name='pname' value={input.pname} onChange={getInput}></Input>
                </div>
            </div>

            <div className='user__container'>
                
                <div className='underline'>
                    <span className='title'><DownOutlined className='icon'/>Đối Tác Toàn Tín</span>
                </div>

                <div className='name'>
                    
                    <div className='user'>
                        <div className='input__container space'>
                        <span>Mã khách hàng</span>
                        <Input className='input' id='cid' name='cid' value={cus[cusID - 1].cid}></Input>
                        </div>
                        
                        <div className='input__container space'>
                        <span>Mã sản phẩm khách hàng</span>
                        <Input className='input' id='pid' name='pid'  value={input.pid} onChange={getInput}></Input>
                        </div>
                    </div>

                    <div className='user'>

                        <div className='input__container space'>
                        <span>Tên khách hàng</span>
                        <Input className='input' id='cname' name='cname'  value={cus[cusID - 1].cname}></Input>
                        </div>

                        <div className='input__container space'>
                        <span>Thương Hiệu</span>
                        <Select className='input'  onChange={value => setCusBrand(value)} options={BRAND.map(brand => {
                                return {
                                    label: `${brand}`,
                                    value: brand
                                }
                            })}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mcontent;