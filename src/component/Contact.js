import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faPhoneAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from'./Footer'
export default class Contact extends Component {
    render() {
        return (
            <div className="container text-center py-5">
                <h1>let get in touch</h1>

<i className="contact"><FontAwesomeIcon icon={faPhoneAlt}  className="text-warning" /> </i>
<FontAwesomeIcon icon={faCoffee} className="text-dark"/>
<i className="contact"><FontAwesomeIcon icon={faHeart}  color="red" /> </i>
<br/><br/>
<p>+917001101529</p>
<p>alekh5007@gmail.com</p>
<Footer/>
            </div>
        )
    }
}
