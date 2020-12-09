import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
  AccountCircleIcon: forwardRef((props, ref) => <AccountCircleIcon {...props} ref={ref} />),
};

// id
// 问题内容
// 标签
// 提问时间
// 提问者
// 修改时间
// 标题
// 问题状态
// 【图片视频 放Mongo中】
//
// id
// 回答者
// 回答时间
// 回答的问题
// 回答内容
// 回答状态（删除or被禁or可用）

const DynamicQATable = () => {
  const { useState } = React;

  const [qColumns, setQColumns] = useState([
    { title: 'Qid', field: 'qId', editable: 'never' },
    { title: '标题', field: 'qTitle', editable: 'never' },
    { title: '问题内容', field: 'qContent', editable: 'never' },
    { title: '提问者', field: 'qQuestioner', editable: 'never' },
    { title: '标签', field: 'qLabel', editable: 'never' },
    { title: '提问时间', field: 'qCreateTime', type: 'Date', editable: 'never' },
    { title: '修改时间', field: 'qModifyTime', type: 'Date', editable: 'never' },
    { title: '问题状态', field: 'qStatus', lookup: { 1: '正常可见', 2: '封禁中' }, editable: 'always' },
  ]);

  const [aColumns, setAColumns] = useState([
    { title: 'Aid', field: 'aId', editable: 'never' },
    { title: '回答内容', field: 'aContent', editable: 'never' },
    { title: '回答者', field: 'aAnswerer', editable: 'never' },
    { title: '回答时间', field: 'aCreateTime', type: 'Date', editable: 'never' },
    { title: '回答状态', field: 'aStatus', lookup: { 1: '正常可见', 2: '封禁中' }, editable: 'always' },
  ]);

  const [data, setData] = useState([
    {
      qId: 1,
      qContent: '~~~~~~',
      qLabel: '日常',
      qCreateTime: '2020-12-1 17:00:02',
      qQuestioner: 'cat',
      qModifyTime: '2020-12-1 17:30:13',
      qTitle: '为什么没有人提问？',
      qStatus: 1,
      qAnswers: [
        {
          aId: 1,
          aAnswerer: 'hhy',
          aCreateTime: '2020-12-1 17:20:02',
          aContent: '因为月活用户只有我们俩叭',
          aStatus: 1,
        },
        {
          aId: 2,
          aAnswerer: 'hhy',
          aCreateTime: '2020-12-1 17:25:02',
          aContent: '当我没说',
          aStatus: 2,
        },
      ],
    },
    {
      qId: 2,
      qContent: '~~~~~~',
      qLabel: '日常',
      qCreateTime: '2020-12-1 17:00:02',
      qQuestioner: 'cat',
      qModifyTime: '2020-12-1 17:30:13',
      qTitle: '为什么没有人提问？',
      qStatus: 1,
      qAnswers: [
        {
          aId: 3,
          aAnswerer: 'hhy',
          aCreateTime: '2020-12-1 17:20:02',
          aContent: '因为月活用户只有我们俩叭',
          aStatus: 1,
        },
        {
          aId: 4,
          aAnswerer: 'hhy',
          aCreateTime: '2020-12-1 17:25:02',
          aContent: '当我没说',
          aStatus: 1,
        },
      ],
    },
    {
      qId: 3,
      qContent: '~~~~~~',
      qLabel: '日常',
      qCreateTime: '2020-12-1 17:00:02',
      qQuestioner: 'cat',
      qModifyTime: '2020-12-1 17:30:13',
      qTitle: '为什么没有人提问？',
      qStatus: 1,
      qAnswers: [
        {
          aId: 5,
          aAnswerer: 'hhy',
          aCreateTime: '2020-12-1 17:20:02',
          aContent: '因为月活用户只有我们俩叭',
          aStatus: 1,
        },
        {
          aId: 6,
          aAnswerer: 'hhy',
          aCreateTime: '2020-12-1 17:25:02',
          aContent: '当我没说',
          aStatus: 1,
        },
      ],
    },
  ]);

  return (
    <MaterialTable
      title="问答信息管理"
      icons={tableIcons}
      columns={qColumns}
      data={data}
      options={{
        filtering: true,
        exportButton: true,
      }}
      editable={{
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
      }}
      detailPanel={[
        {
          tooltip: 'Show Name',
          render: (rowData) => (
            // <MaterialTable columns={aColumns} data={{...rowData.qAnswers}}/>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                对应回答
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Aid</TableCell>
                    <TableCell>回答者</TableCell>
                    <TableCell>回答时间</TableCell>
                    <TableCell>回答内容</TableCell>
                    <TableCell>回答状态</TableCell>
                    <TableCell>操作</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData.qAnswers.map((answerRow) => (
                    <TableRow key={answerRow.aId}>
                      <TableCell component="th" scope="row">
                        {answerRow.aId}
                      </TableCell>
                      <TableCell>{answerRow.aAnswerer}</TableCell>
                      <TableCell>{answerRow.aCreateTime}</TableCell>
                      <TableCell>{answerRow.aContent}</TableCell>
                      {answerRow.aStatus === 1 ? (
                        <>
                          <TableCell>正常</TableCell>
                          <TableCell>
                            <Button>封禁回答</Button>
                          </TableCell>
                        </>
                      ) : null}
                      {answerRow.aStatus === 2 ? (
                        <>
                          <TableCell>封禁中</TableCell>
                          <TableCell>
                            <Button>解封回答</Button>
                          </TableCell>
                        </>
                      ) : null}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          ),
        },
      ]}
    />
  );
};

export default DynamicQATable;
