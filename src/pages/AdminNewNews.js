import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';

import NewNews from '../components/NewNews';
export default class AdminNewNews extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      valTable: null
    }
  }

  render(){

    // let valTable = JSON.stringify(this.state.valTable)

    return (
      <div className="content-pages-admin">
        <HeaderAdmin />
        <NewNews
          titleEditor="Criar Notícia"
        />
      </div>
    );
  }
} 