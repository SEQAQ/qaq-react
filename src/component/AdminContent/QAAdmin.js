import React from 'react';

import DynamicQATable from '../Table/DynamicQATable';

export class QAAdmin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DynamicQATable />
      </div>
    );
  }
}

export default QAAdmin;
