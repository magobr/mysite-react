import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import CreateUser from '../components/form/CreateUser';
import Table from '../components/Table';

export default class AdminPage extends React.Component{
  
  render(){
    const { path } = this.props.match;
    const mockData = {
      tableHead: ["#", "Nome", "E-mail", "Status", "Action"],
      tableBody: ["1", "João da Silva", "j.silva@teste.com", "Ativo", 'teste']
    }
    return (
      <>
        <HeaderAdmin />
        {(path === "/admin/user/new") ? <CreateUser /> : ''}
        {(path === "/admin/user") ? <Table tableHead={mockData.tableHead} tableBody={mockData.tableBody} /> : ''}
      </>
    );
  }
} 