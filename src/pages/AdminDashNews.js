import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import Table from '../components/Table';
import api from '../services/api';

export default class AdminDashNews extends React.Component{

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
    api.get('news', {}, headers)
    .then(res =>{
      let result = res.data.map(val => {
        return{
          _id: val._id,
          news: val.news.headline,
          author: `${val.author.frist_name} ${val.author.last_name}`,
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
    let valTable = JSON.stringify(this.state.valTable)

    return (
      <div className="content-pages-admin">
        <HeaderAdmin />

        {this.state.valTable === null 
          ? <>Loagind</> : 
          <Table
            tableTitle="Listagem de Usuários"
            tableHead={["#", "Título", "Autor", "Action"]}
            tableBody={valTable}
          />
        }
      </div>
    );
  }
} 