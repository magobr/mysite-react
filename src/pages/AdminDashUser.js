import React, { useState, useEffect } from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import Table from '../components/Table';
import Modal from '../components/Modal';
import ModalUserEdit from "../components/Modal/ModalUserEdit"

import api from '../services/api';

function AdminDashUser(props) {
  
  const [userEditId, setUserEditId] = useState({});
  const [valTable, setValTable] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  async function userData (){
    const headers = {
      headers: {
      'Content-Type': 'application/json'
      }
    }
    const { data } = await api.get(`user`, {}, headers)
    setValTable(data)
  }

  useEffect(()=>{
    userData()
  },[])

  const deleteUser = async (id) => {
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      const { data } = await api.delete(`user/${id}`, headers);
      return data;
    } catch (e) {
      return e;
    }
  }

  const handleDelete = async (id) =>{
    const response = await deleteUser(id);
    userData()
    console.log(response) 
  }

  const contentTable = () =>{
    let content = valTable;
    return(
      <>
        {content.map((val, i)=>{
          let vals = Object.values(val)
          return(
            <tr key={i}>
                <td>{i+1}</td>
                <td>{vals[1] + " " + vals[2]}</td>
                <td>{vals[3]}</td>
                <td key={i+1} width="5%">
                  <div className="icon-defaut">
                      <span className="trash-outline" onClick={()=>handleDelete(vals[0]) } >
                        <ion-icon name="trash-outline" />
                      </span>
                      <span className="create-outline" onClick={(e) => handleModal(e) }>
                        <ion-icon name="create-outline" id={vals[0]} />
                      </span>
                  </div>
                </td>
            </tr>
          )
        })}
      </>
    )
  }

  const handleModal = (e) =>{
    if (!openModal) {
      setOpenModal(true)
      setUserEditId(e.target.id)
    } else {
      userData()
      setOpenModal(false)
    }
  }

  const modalTitle = "Editar Usuário";
  const contentTableVal = contentTable();

  return (
    <div className="content-pages-admin">
      <HeaderAdmin />
      {valTable === null 
        ? <>Loagind</> : 
        <Table
          tableTitle="Listagem de Usuários"
          tableHead={["#", "Nome", "E-mail", "Action"]}
          contentTable={ contentTableVal }
        />
      }
      {openModal &&
      <Modal
        modalTitle={modalTitle}
        modalContent={< ModalUserEdit userEditId={userEditId} closeModal={handleModal} />}
        closeModal={handleModal}
      />}
    </div>
  );

} 

export default AdminDashUser;