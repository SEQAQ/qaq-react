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
import React, { forwardRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { getAnswers } from '../../services/AnswerService';
import { getAllQuestions } from '../../services/QuestionService';

// const [data, setData] = useState([
//   {
//     qId: 1,
//     qContent: '~~~~~~',
//     qLabel: '日常',
//     qCreateTime: '2020-12-1 17:00:02',
//     qQuestioner: 'cat',
//     qModifyTime: '2020-12-1 17:30:13',
//     qTitle: '为什么没有人提问？',
//     qStatus: 1,
//     qAnswers: [
//       {
//         aId: 1,
//         aAnswerer: 'hhy',
//         aCreateTime: '2020-12-1 17:20:02',
//         aContent: '因为月活用户只有我们俩叭',
//         aStatus: 1,
//       },
//       {
//         aId: 2,
//         aAnswerer: 'hhy',
//         aCreateTime: '2020-12-1 17:25:02',
//         aContent: '当我没说',
//         aStatus: 2,
//       },
//     ],
//   },
//   {
//     qId: 2,
//     qContent: '~~~~~~',
//     qLabel: '日常',
//     qCreateTime: '2020-12-1 17:00:02',
//     qQuestioner: 'cat',
//     qModifyTime: '2020-12-1 17:30:13',
//     qTitle: '为什么没有人提问？',
//     qStatus: 1,
//     qAnswers: [
//       {
//         aId: 3,
//         aAnswerer: 'hhy',
//         aCreateTime: '2020-12-1 17:20:02',
//         aContent: '因为月活用户只有我们俩叭',
//         aStatus: 1,
//       },
//       {
//         aId: 4,
//         aAnswerer: 'hhy',
//         aCreateTime: '2020-12-1 17:25:02',
//         aContent: '当我没说',
//         aStatus: 1,
//       },
//     ],
//   },
//   {
//     qId: 3,
//     qContent: '~~~~~~',
//     qLabel: '日常',
//     qCreateTime: '2020-12-1 17:00:02',
//     qQuestioner: 'cat',
//     qModifyTime: '2020-12-1 17:30:13',
//     qTitle: '为什么没有人提问？',
//     qStatus: 1,
//     qAnswers: [
//       {
//         aId: 5,
//         aAnswerer: 'hhy',
//         aCreateTime: '2020-12-1 17:20:02',
//         aContent: '因为月活用户只有我们俩叭',
//         aStatus: 1,
//       },
//       {
//         aId: 6,
//         aAnswerer: 'hhy',
//         aCreateTime: '2020-12-1 17:25:02',
//         aContent: '当我没说',
//         aStatus: 1,
//       },
//     ],
//   },
// ]);

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

function SubTable(props) {
  const { useState } = React;

  const [answers, setAnswers] = useState([]);

  console.log(props.rowData);

  useEffect(() => {
    getAnswers(props.rowData.qid).then((result) => {
      setAnswers(result);
      console.log(answers);
    });
  }, props.rowData);

  const blockAnswer = (aid) => {};

  const unblockAnswer = (aid) => {};

  return (
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
          {console.log(answers)}
          {answers.map((answerRow) => (
            <TableRow key={answerRow.aid}>
              <TableCell component="th" scope="row">
                {answerRow.aid}
              </TableCell>
              <TableCell>{answerRow.users.uname}</TableCell>
              <TableCell>{answerRow.ctime}</TableCell>
              <TableCell>
                <ReactMarkdown>{answerRow.detail.mdText}</ReactMarkdown>
              </TableCell>
              {answerRow.status === 1 ? (
                <>
                  <TableCell>正常</TableCell>
                  <TableCell>
                    <Button onClick={blockAnswer}>封禁回答</Button>
                  </TableCell>
                </>
              ) : null}
              {answerRow.status === 0 ? (
                <>
                  <TableCell>封禁中</TableCell>
                  <TableCell>
                    <Button>解封回答</Button>
                  </TableCell>
                </>
              ) : null}
              {answerRow.status === -1 ? (
                <>
                  <TableCell>已被删除</TableCell>
                  <TableCell>
                    <span style={{ color: 'rgb(193,193,193)' }}>无法操作</span>
                  </TableCell>
                </>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

const DynamicQATable = () => {
  const { useState } = React;

  const qColumns = [
    { title: 'Qid', field: 'qid', editable: 'never' },
    { title: '标题', field: 'title', editable: 'never' },
    {
      title: '问题内容',
      field: 'detail.detail',
      editable: 'never',
      render: (rowData) => <>{rowData.detail && rowData.detail.detail ? <ReactMarkdown>{rowData.detail.detail}</ReactMarkdown> : <span style={{ color: 'rgb(193,193,193)' }}>用户什么都没写...</span>}</>,
    },
    { title: '提问者', field: 'users.uname', editable: 'never' },
    { title: '标签', field: 'tag', editable: 'never' },
    { title: '提问时间', field: 'ctime', type: 'Date', editable: 'never' },
    { title: '修改时间', field: 'mtime', type: 'Date', editable: 'never' },
    {
      title: '问题状态',
      field: 'status',
      editable: 'always',
      lookup: { 0: '封禁中', 1: '正常可见', 2: '用户已关闭' },
      render: (rowData) => (
        <>
          {rowData && rowData.status === -1 ? <span>已删除</span> : null}
          {rowData && rowData.status === 0 ? <span>封禁中</span> : null}
          {rowData && rowData.status === 1 ? <span>正常可见</span> : null}
          {rowData && rowData.status === 2 ? <span>用户已关闭</span> : null}
        </>
      ),
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllQuestions().then((result) => {
      console.log(result);
      setData(result);
    });
  }, []);

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
          render: (rowData) => <SubTable rowData={rowData} />,
        },
      ]}
    />
  );
};

export default DynamicQATable;
