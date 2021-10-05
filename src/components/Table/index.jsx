import React from 'react';

import './style.css';
export default class Table extends React.Component {
    
    render(){
        const { tableHead, tableBody } = this.props
        let tableBodyVal = JSON.parse(tableBody);
        return(
            <div className="bd-table">
                <div className="table-title">
                    <h1>{this.props.tableTitle}</h1>
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
                            return(
                                <tr key={i}>
                                    <td key={val._id}>{i+1}</td>
                                    <td key={val.name}>{val.name}</td>
                                    <td key={val.email}>{val.email}</td>
                                    <td key={i+1}>asdasd</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
