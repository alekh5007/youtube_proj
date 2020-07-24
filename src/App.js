import React from 'react';

import './App.css';
import {Button, Row, Container, Col} from 'reactstrap';
import { ToastContainer,toast }from'react-toastify';
import Home from'./component/Home'
import Course from'./component/Course'
import Insta from'./component/Insta'
import Allcourses from'./component/Allcourses'
import AddCourses from'./component/AddCourses'
import Header from './component/Header'
import Menu from './component/Menu'
import Contact from'./component/Contact'
import About from'./component/About'
import Covid from'./component/Covid'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {

  const notify = () => toast.warning("Wow so easy !");
  
  return (
    <div>
  <Router>
    <ToastContainer/>
        <Container>
             <Header/>
           <Row>
            <Col md={4}>
<Menu/>
      </Col>

      <Col md={8}>
      <Route path="/" component={Home} exact /> 
    
      <Route path="/add-courses" component={AddCourses }exact />
      <Route path="/contact" component={Contact }exact />
      <Route path="/about" component={About }exact />
      </Col>
    </Row>
    <Route path="/all-courses"  exact >
      <Allcourses name="alekhroy007"/>
    </Route>
    <Route path="/covid-status" component={Covid } exact />
  </Container>
 
  </Router>

   </div>
  );  
}    



export default App;
