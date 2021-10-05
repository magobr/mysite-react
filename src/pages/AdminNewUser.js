import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import CreateUser from '../components/form/CreateUser';

export default class AdminNewUser extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      valTable: null
    }
  }

  render(){

    // let valTable = JSON.stringify(this.state.valTable)

    return (
      <>
        <HeaderAdmin />
        <CreateUser />
      </>
    );
  }
} 