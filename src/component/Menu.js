import React from'react';
import { ListGroup} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"; 

function Menu(){
    return(
        <ListGroup>
              <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
             
              <Link className="list-group-item list-group-item-action" tag="a" to="/covid-status" action>Covid19</Link>

               <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>Instagram login</Link> 
              <Link className="list-group-item list-group-item-action" tag="a" to="all-courses" action>Instagram profile</Link>
              <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
              <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About us</Link>
          
        </ListGroup>
    )
}
export default Menu;