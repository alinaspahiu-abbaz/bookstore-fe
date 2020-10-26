import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/MessageLoader/Message";
import Loader from "../../components/MessageLoader/Loader";
import { getUserDetails } from "../../actions/userActions";

const ProfilePage = ({history}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)
  
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
        if (!userInfo) {
          history.push('/login')
        } else {
          if (!user) {
            dispatch(getUserDetails('profile'))
         
          } else {
            setName(user.name)
            // setSurname(user.surname)
            // setEmail(user.email)
          }
        }
      }, [dispatch, history, userInfo, user ])
  
    // submitHandler:
    const submitHandler = (e) => {
      e.preventDefault()
      if(password !== confirmPassword) {
          setMessage('passwords do not match!')
      } else {
          
      }
     
    }
      
        return (
          <Row>
              <Col md={3}>
              <h2> User Profile</h2>
            {message && <Message variant='danger'> {message} </Message>}

            
            { loading ? (< Loader /> )
             :  error ? ( 
              <Message variant='danger'> {error} </Message>
             
             ) : (

            
              <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
      
              <Button type='submit' variant='dark'>
                  Update
              </Button>
            </Form>
             )
            
            }
              </Col>

              <Col md={9}>
                  <h2> My Orders:</h2>
              </Col>
          </Row>
    )
}

export default ProfilePage