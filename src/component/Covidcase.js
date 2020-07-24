import React from 'react'
import { Table } from 'reactstrap';
function Covidcase({cases}) {
    return (
        <div>
            
            <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>TotalConfirmed</th>
          <th>TotalRecovered</th>
          <th>TotalDeaths</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{cases.Country}</td>
          <td>{cases.TotalConfirmed}</td>
          <td>{cases.TotalRecovered}</td>
          <td>{cases.TotalDeaths}</td>
        </tr>
       
      </tbody>
    </Table>
        </div>
    )
}

export default Covidcase
