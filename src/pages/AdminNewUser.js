import React from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import CreateUser from '../components/form/CreateUser';

function AdminNewUser (){
  
  return (
    <div className="content-pages-admin">
      <HeaderAdmin />
      <CreateUser />
    </div>
  );

} 

export default AdminNewUser;