import React, { Component } from 'react'
import { Row, Container, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import Footer from './Footer'
export default class About extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <br /><br />
                <Row>
                    <Col md={6}>
                        <p><a href={'https://www.instagram.com/alekhroy007/'} target="_blank">Instagram</a></p>
                        <p><a href={'https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSGLPwVQSwtwPsZHtpKLMFhjjPdtHjTSVhwTmrNvvqJsrDnFrPpqzRNjDjqkJBZLNKDXHLjv'} target="_blank">Gmail</a></p>
                        <p><a href={'https://twitter.com/Alekhroy1'} target="_blank">Twitter</a></p>
                    </Col>

                    <Col md={6}>
                        <p><a href={'https://www.facebook.com/alekh.roy.1'} target="_blank">Facebook</a></p>
                        <p><a href={'https://www.linkedin.com/in/alekh-kumar-3a895175/'} target="_blank">Linkdin</a></p>
                        <p><a href={'https://api.whatsapp.com/send?phone=917001101529'} target="_blank">Whatsapp</a></p>
                    </Col>
                </Row>
                <br /><br />
                <Footer />
            </div>

        )
    }
}
