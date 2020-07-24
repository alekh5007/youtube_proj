import React, { useState, useEffect } from 'react';
import Course from './Course'
import {
    Col
} from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Row } from 'reactstrap';

function Allcourses({ name }) {
    console.log(name)
    const [cname, setCname] = useState();
    const [count, setCount] = useState();
    const [post, setPost] = useState();
    const [courses, setCourses] = useState([
        // {title:"python",description:"this is my first tutorials"},
        // {title:"java",description:"this is my first tutorials"},
    ])
    const value = localStorage.getItem('username')
    //function to call server
    const getallapidata = () => {

        axios.get('https://www.instagram.com/' + value + '/?__a=1').then(
            (response) => {
                //console.log(response.data.graphql.user);
                toast.success("sucess");
                //setCourses(response.data.graphql.user.edge_followed_by.count);
                setCourses(response.data.graphql.user);
                setCount(response.data.graphql.user.edge_followed_by.count);
                setPost(response.data.graphql.user.edge_owner_to_timeline_media.count);
            },

            (error) => {
                console.log(error)
                toast.warning(" invalid username or account is private");
            }
        )
    }

    //calling load fn
    useEffect(() => {
        getallapidata();
    }, [])

    return (

        <>
            <h1 className="text-center my-3">{courses.username}</h1>

            <Row className="py-5">
                <Col md={4}>
                    <img alt="Card image" style={{ height: 200, width: 200, borderRadius: 90, marginLeft: 8, }} src={courses.profile_pic_url_hd} />
                    <h1>{courses.full_name}</h1>
                </Col>

                <Col md={4}>
                  
                    <h1 className="py-4">{post} Posts</h1>
                </Col>

                <Col md={4}>
                    <h1 className="py-4">{count} Followers</h1>
                </Col>

           

            <Course course={value} />

            </Row>
        </>



    )
}

export default Allcourses;