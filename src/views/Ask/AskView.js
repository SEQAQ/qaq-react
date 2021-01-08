import { Snackbar, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';

import { MdEditor } from '../../component';
import { AskButton } from '../../component/Button';
import { Card } from '../../component/Card';
import { post, userInfo } from '../../lib';
import { API_QUES_EDIT, API_QUES_NEW } from '../../utils/constants';

const AskView = ({ initialTitle, initialMdSource, editMode, qid }) => {
  const [title, setTitle] = useState(initialTitle ? initialTitle : '');
  const [mdSource, setMdSource] = useState(initialMdSource ? initialMdSource : '');
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [severity, setSeverity] = useState('warning');
  const [tag, setTag] = useState('');
  const user = userInfo();
  const url = editMode ? API_QUES_EDIT : API_QUES_NEW;

  const postQuestion = () => {
    if (title === '') {
      setOpen(true);
      setMsg('标题为空');
    }

    post(
      url,
      {
        title,
        detail: mdSource,
        uid: user.uid,
        qid: editMode ? qid : undefined,
        tag: tag,
      },
      true
    )
      .then((data) => {
        if (data && data.code && data.code !== 0) {
          switch (data.code) {
            case 30:
              setSeverity('warning');
              setMsg('晚了，现在不能改了');
              setOpen(true);
              return;
          }
        }
        setOpen(true);
        setSeverity('success');
        setMsg('🎉🎉🎉 成功！EXP +10');
      })
      .catch(() => {
        setOpen(true);
        setSeverity('warning');
        setMsg('失败');
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const changeTag = (ev) => setTag(ev.target.value);

  const tagList = ['校园', '娱乐', '情感', '科学', '数码', '社会', '音乐', '影视', '文史哲', '人生经验'];

  return (
    <>
      <Card
        style={{
          width: '90vw',
          padding: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TextField label="标题" style={{ width: '100%' }} onChange={(ev) => setTitle(ev.target.value)} defaultValue={initialTitle ? initialTitle : ''} />
        <span style={{ marginRight: '10px' }}>标签</span>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={tag} onChange={changeTag}>
          {tagList.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
        <MdEditor sourceChangeHandler={(src) => setMdSource(src)} defaultValue={initialMdSource ? initialMdSource : null} />
        <AskButton onClick={postQuestion} />
      </Card>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity={severity}>
          {msg}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AskView;

/*
 <MenuItem value={"校园"}>Ten</MenuItem>
 <MenuItem value={"娱乐"}>Twenty</MenuItem>
 <MenuItem value={"情感"}>Twenty</MenuItem>
 <MenuItem value={"科学"}>Twenty</MenuItem>
 <MenuItem value={"数码"}>Twenty</MenuItem>
 <MenuItem value={"社会"}>Thirty</MenuItem>
 <MenuItem value={"音乐"}>Thirty</MenuItem>
 <MenuItem value={"影视"}>Thirty</MenuItem>
 <MenuItem value={"文史哲"}>Thirty</MenuItem>
 <MenuItem value={"人生经验"}>Thirty</MenuItem>
*/
