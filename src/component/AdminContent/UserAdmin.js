import React from 'react';

import DynamicUserTable from '../../component/Table/DynamicUserTable';

export class UserAdmin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DynamicUserTable />
      </div>
    );
  }
}

export default UserAdmin;
