import { tr } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';

import HeaderAdmin from '../components/HeaderAdmin';
import Table from '../components/Table';
import api from '../services/api';

function AdminDashNews(props){

  const [valTable, setValTable] = useState([]);

  const newsData = ()=>{
    const headers = {
      headers: {
      'Content-Type': 'application/json'
      }
    }
    api.get('news', {}, headers)
    .then(res =>{
      let result = res.data;
      setValTable(result);
    })
    .catch(e =>{
      setValTable(e.data);
    })
  }

  useEffect(()=>{
    newsData()
  },[]);

  const deleteNews = async (id) => {
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      const { data } = await api.delete(`news/${id}`, headers);
      return data;
    } catch (e) {
      return e;
    }
  }

  const handleDelete = async (id) =>{
    const response = await deleteNews(id);
    newsData()
    console.log(response) 
  }

  const contentTable = () =>{
    let contentMap = valTable.map((val, i)=>{
      return(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{val.news.headline}</td>
          <td>{val.author.frist_name + " " + val.author.last_name}</td>
          <td key={i+1} width="5%">
            <span className="trash-outline" onClick={()=>handleDelete(val._id) } >
              <ion-icon name="trash-outline" />
            </span>
          </td>
        </tr>
      )
    });

    return contentMap;
  }

  const contentTableVal = contentTable();
  
  return (
    <div className="content-pages-admin">
      <HeaderAdmin />

      {valTable === null 
        ? <>Loading</> : 
        <Table
          tableTitle="Listagem de Notícias"
          tableHead={["#", "Título", "Autor", "Action"]}
          contentTable={contentTableVal}
        />
      }
    </div>
  );
  
} 

export default AdminDashNews;