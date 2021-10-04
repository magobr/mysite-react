import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import Table from '../components/Table';
import api from '../services/api';

export default class AdminPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      valTable: null
    }
  }

  componentDidMount(){
    const headers = {
      headers: {
      'Content-Type': 'application/json'
      }
    }
    api.get('user', {}, headers)
    .then(res =>{
      let result = res.data.map(val => {
        return{
          _id: val._id,
          name: `${val.frist_name} ${val.last_name}`,
          email: val.email,
        }
      })
      this.setState({
        valTable: result
      });
    })
    .catch(e =>{
      this.setState({
        valTable: e.data
      });
    })
  }

  render(){
    if(this.state.valTable === null){
      return (
        <> 
          Loading
        </>
      )
    }

    let valTable = JSON.stringify(this.state.valTable)

    return (
      <>
        <HeaderAdmin />
        <Table
          tableHead={["#", "Nome", "E-mail", "Action"]}
          tableBody={valTable}
        />
      </>
    );
  }
} 