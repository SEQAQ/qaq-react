import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';
import React, { forwardRef } from 'react';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const DynamicUserTable = () => {
  const { useState } = React;

  // const [columns, setColumns] = useState([
  //   { title: 'Id', field: 'id' },
  //   { title: '用户名', field: 'userName', initialEditValue: 'QAQ' },
  //   { title: '姓名', field: 'name', initialEditValue: '法外狂徒张三' },
  //   { title: '性别', field: 'sex', lookup: { 1: '男', 2: '女', 3: '其他' } },
  //   { title: '邮箱', field: 'email', initialEditValue: 'xxxx@xxx.com' },
  //   { title: '学校', field: 'school', initialEditValue: '上海交通大学' },
  //   { title: '学历', field: 'education', lookup: { 1: '本科在读', 2: '硕士在读', 3: '博士在读', 4: '教职人员', 5: '其他' } },
  //   { title: '电话号码', field: 'phone' },
  //   { title: '用户类型', field: 'userType', lookup: { 1: '管理员', 2: '普通用户', 3: '封禁中' } },
  // ]);

  const columns = [
    { title: 'Id', field: 'id' },
    { title: '用户名', field: 'userName', initialEditValue: 'QAQ' },
    { title: '姓名', field: 'name', initialEditValue: '法外狂徒张三' },
    { title: '性别', field: 'sex', lookup: { 1: '男', 2: '女', 3: '其他' } },
    { title: '邮箱', field: 'email', initialEditValue: 'xxxx@xxx.com' },
    { title: '学校', field: 'school', initialEditValue: '上海交通大学' },
    { title: '学历', field: 'education', lookup: { 1: '本科在读', 2: '硕士在读', 3: '博士在读', 4: '教职人员', 5: '其他' } },
    { title: '电话号码', field: 'phone' },
    { title: '用户类型', field: 'userType', lookup: { 1: '管理员', 2: '普通用户', 3: '封禁中' } },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      userName: 'hhy_userName1',
      name: 'hhy_name1',
      sex: 1,
      email: '1x24x3x2xx@qq.com',
      school: 'SJTU',
      education: 1,
      phone: 'xxx-xxxx-xxxx',
      userType: 1,
    },
    {
      id: 2,
      userName: 'hhy_userName2',
      name: 'hhy_name2',
      sex: 2,
      email: '1x24x3x2xx@qq.com',
      school: 'SJTU',
      education: 2,
      phone: 'xxx-xxxx-xxxx',
      userType: 1,
    },
    {
      id: 3,
      userName: 'hhy_userName3',
      name: 'hhy_name3',
      sex: 3,
      email: '1x24x3x2xx@qq.com',
      school: 'SJTU',
      education: 3,
      phone: 'xxx-xxxx-xxxx',
      userType: 1,
    },
  ]);

  return (
    <MaterialTable
      title="用户信息管理"
      icons={tableIcons}
      columns={columns}
      data={data}
      options={{
        filtering: true,
        exportButton: true,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              setData([...data, newData]);
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
};

export default DynamicUserTable;
