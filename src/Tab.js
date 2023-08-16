import React from 'react';
import { Table } from "antd";
import { useSelector } from "react-redux";

function Tab() {
  const dataList = useSelector(state => state.table.tableValue);

  const columns = [
    {
      key: 'id',
      title: 'Mã',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      key: 'index',
      title: 'Danh mục',
      dataIndex: 'index',
    },
    {
      key: 'brand',
      title: 'Thương hiệu',
      dataIndex: 'brand',
    },
    {
      key: 'itemName',
      title: 'Họ sản phẩm',
      dataIndex: 'itemName',
    },
    {
      key: 'active',
      title: 'Kích hoạt',
      dataIndex: 'active',
    },
    {
      key: 'date',
      title: 'Ngày tạo',
      dataIndex: 'date',
    },
    {
      key: 'modify-date',
      title: 'Ngày điều chỉnh',
      dataIndex: 'modify-date',
    },
    {
      key: 'action',
      title: 'Hành động',
      dataIndex: 'action',
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={dataList} pagination={false}></Table>
    </div>
  );
}

export default Tab;
