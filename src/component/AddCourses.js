import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap'
import Footer from'./Footer'

export default class AddCourses extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    login() {
        // alert("gggggg",this.state.name)
        localStorage.setItem('username', this.state.name);

        //console.warn(this.state.name)
        console.warn(this.props.history.push('all-courses'))
        // <Link to={"/Allcourses/"+key}><FontAwesomeIcon icon={faEdit}/></Link>
    }
    render() {
        return (
            <div>
                <img src="https://i.imgur.com/zqpwkLQ.png" className="center" />
                <br />
                <center>
                <input type="text"
                    placeholder="enter username"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} /><br /><br />
              
                <button onClick={() => { this.login() }}>submit</button>
                </center>
                <br/><br/>
                <Footer/>
            </div>
        )
    }
}


// render() {
//     return(
//         <div>
//            <img src="https://i.imgur.com/zqpwkLQ.png" className="center"/>
//    <br/>
//             <Form>
//                 <FormGroup>
//                 {/* <Label for="courseid">Courseid</Label> */}
//         <Input type="text" name="username"  placeholder="insta username" />
//      </FormGroup>

//                 <FormGroup>
//                     <Container className="text-center">
//                             <button color="primary" onClick={()=>{create()}}>Add Restaurant</button>
//                     </Container>
//                 </FormGroup>
//             </Form>
//         </div>
//     )
//  }