import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

import { AskButton } from '../../component/Button';
import { Card } from '../../component/Card';
import MdEditor from '../../component/Editor/Editor';

const AskView = () => {
  const [title, setTitle] = useState('');
  const postQuestion = () => {
    // eslint-disable-next-line
    console.log(title);
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
        <MdEditor />
        <AskButton onClick={postQuestion} />
      </Card>
    </>
  );
};

export default AskView;
