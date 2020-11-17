import { Snackbar, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';

import { MdEditor } from '../../component';
import { AskButton } from '../../component/Button';
import { Card } from '../../component/Card';
import { post } from '../../lib';
import { API_QUES_NEW } from '../../utils/constants';

const AskView = () => {
  const [title, setTitle] = useState('');
  const [mdSource, setMdSource] = useState('');
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [severity, setSeverity] = useState('warning')

  const postQuestion = () => {
    // TODO: fix uid
    if (title === '') {
      setOpen(true);
      setMsg('标题为空');
    }
    post(API_QUES_NEW, { title, detail: mdSource, uid: 1 }).then(() => {
      setOpen(true);
      setSeverity('success')
      setMsg("成功！");
    }).catch(() => {
      setOpen(true)
      setSeverity('warning')
      setMsg("失败")
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
        <TextField label="标题" style={{ width: '100%' }} onChange={(ev) => setTitle(ev.target.value)} />
        <MdEditor sourceChangeHandler={(src) => setMdSource(src)} />
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
