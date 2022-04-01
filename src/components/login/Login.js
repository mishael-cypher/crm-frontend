import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import './login.css'

export const Login = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
    
  return (
    <div>
        <Container>
            <Row>
                <Col>
                   <h1 className="text-info text-center">Client Login</h1>
                   <hr /> 
                   <Form onSubmit={handleOnSubmit}>
                       <Form.Group>
                           <Form.Label>Email Address</Form.Label>
                           <Form.Control 
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            value={email}
                            placeholder="Enter Email"
                            required
                           />
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>Password</Form.Label>
                           <Form.Control 
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            required
                           />
                       </Form.Group>
                       <Button className="mt-3" type="submit">Login</Button>
                   </Form>
                   <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a onClick={() => formSwitcher('reset')} href="#!">Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}