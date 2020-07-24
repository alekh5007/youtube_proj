import React, { useState, useEffect } from 'react'
import Covidcase from './Covidcase'
import { Table, Container } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from'./Footer'
export default function Covid() {
    const [cdata, setCdata] = useState([])

    const callallapidata = () => {

        axios.get('https://api.covid19api.com/summary').then(
            (response) => {
                //console.log(response.data.Countries);
                toast.success("sucess");
                //setCourses(response.data.graphql.user.edge_owner_to_timeline_media.edges);
                setCdata(response.data.Countries);
            },

            (error) => {
                //console.log(error)
                toast.warning("something went wrong");
            }
        )
    }

    useEffect(() => {
        callallapidata();
    }, [])

    return (
        <Container>
            <h1 className="text-center">Covid Cases</h1>
            {
                cdata ?
                <div>
                    <Table dark>
                        <thead>
                            <tr>
                                
                                <th>Country</th>
                                <th>TotalConfirmed</th>
                                <th>TotalRecovered</th>
                                <th>TotalDeaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cdata.map((item, i) =>

                                    <tr>
                                       
                                        <td>{item.Country}</td>
                                        <td>{item.TotalConfirmed}</td>
                                        <td>{item.TotalRecovered}</td>
                                        <td>{item.TotalDeaths}</td>
                                    </tr>
                                )

                            }
                            </tbody>
                            </Table>
                        </div>
                        : "no data available"
                       
        
        } 
        <Footer/>
        </Container>
             /* //  cdata.map((item)=><Covidcase cases={item}/>):"no cases are available"
          // cdata?<Course course={courses}/>:"no courses are available" */
    )
}
















// class Covid extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         data: []
//       }
//     }

//     componentDidMount() {
//       fetch("https://blockchain.info/ticker").
//         then(response => response.json()).
//         then(findresponse => {
//           this.setState({
//             data: [findresponse]
//           });
//         })
//     }

//     render() {
//       return (
//         <div>
//           {
//             this.state.data.map((dynamicData, Key) => {
//               let keys = Object.keys(dynamicData);
//               let d = dynamicData;
//               return keys.map(data => {
//                 return (
//                   <div style={{borderBottom: '1px solid black'}}>
//                     <p>Currency: {data}</p>
//                     <p>Buy: {dynamicData[data].buy}</p>
//                   </div>
//                 );
//               });
//             })
            
//           }
//         </div>
//       )
//     }
//   }

//   export default Covid;