import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Mheader.css';
import {
    FormOutlined,
    SaveOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { Button, Switch } from 'antd';
import { modifyTable, deleteRow, getID } from './action/tableAction';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Mheader({cusBrand, input}) {

    const navigate = useNavigate();

    const cus = useSelector(state => state.table.customers);
    const cusID = useSelector(state => state.table.customerSelectedID);
    const selectedID = useSelector(state => state.table.selectedID);
    const dispatch = useDispatch();

    const deleteValue = () => {
        const remove = deleteRow(selectedID);
        dispatch(remove);
    }

    const getSelectedID = () => {
        navigate("/add/modify");
        const get = getID(selectedID);
        dispatch(get);
    }

    const updateValue = () => {
        const d = new Date();
        const modifyDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        navigate("/homepage");
        const modifyUser = {
            number: selectedID,
            id: cus[cusID - 1].cid,
            name: cus[cusID - 1].cname,
            index: input.pid,
            brand: cusBrand,
            itemName: input.pname,
            active: <Switch />,
            date: '',
            "modify-date": modifyDate,
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
        }
        toast.success("Sửa thành công!", {containerId: 'save-success'})
        const update = modifyTable(modifyUser)
        dispatch(update);
    }

    return (
        <div className="mheader">
            <span>Chỉnh Sửa Sản Phẩm MWG</span>
            <button onClick={() => updateValue()}><SaveOutlined className='icon'/>Lưu</button>
        </div>
    );
}

export default Mheader;