import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';

import NewNews from '../components/NewNews';
function AdminNewNews (){

  return (
    <div className="content-pages-admin">
      <HeaderAdmin />
      <NewNews
        titleEditor="Criar Notícia"
      />
    </div>
  );

} 

export default AdminNewNews;