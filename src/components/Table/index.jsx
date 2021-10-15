import React from 'react';

import './style.css';
export default class Table extends React.Component {
    render(){
        const { tableHead, tableBody, tableTitle } = this.props
        let tableBodyVal = JSON.parse(tableBody);
        return(
            <div className="bd-table">
                <div className="table-title">
                    <h1>{tableTitle}</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {tableHead.map((val)=>{
                                return(
                                    <th key={val}>{val}</th>
                                )
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {tableBodyVal.map((val, i)=>{

                            let vals = Object.values(val)

                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{vals[1]}</td>
                                    <td>{vals[2]}</td>
                                    <td key={i+1}>Editar</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
