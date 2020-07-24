

import React, { useState, useEffect } from 'react';
import {
  Card, CardBody,  CardText,Button,Container,Col,
  CardSubtitle,
  Row
} from 'reactstrap';

import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from'./Footer'

function Course({ course }) {
  //console.warn("coooollll",course)
  const [cpic, setCpic] = useState([]);
  const value = localStorage.getItem('username')
  const getallapidata = () => {

    axios.get('https://www.instagram.com/' + course + '/?__a=1').then(
        (response) => {
            //console.log(response.data.graphql.user.edge_owner_to_timeline_media.edges);
          
            setCpic(response.data.graphql.user.edge_owner_to_timeline_media.edges);
        },

        (error) => {
            console.log(error)
            //toast.warning("something went wrong");
        }
    )
}

//calling load fn
useEffect(() => {
    getallapidata();
}, [])
  return (


    <Row>
     <hr /> 
  

      
{
  cpic.map((itemsss)=>
  <Col sm={4} >
        <br/>
  <img   className="py-3" alt="Card image" style={{height:300, width:300}} src={itemsss.node.display_url} />
  </Col>
  )
}
<Footer/>
    </Row>

  );
}

export default Course;