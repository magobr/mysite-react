import React from 'react';

import './style.css';

function Table(props){
    const { tableHead, contentTable, tableTitle } = props
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
                    {contentTable}
                </tbody>
            </table>
        </div>
    )
}
    
export default Table;