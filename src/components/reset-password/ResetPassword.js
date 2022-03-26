import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import './login.css'

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
    
  return (
    <div>
        <Container>
            <Row>
                <Col>
                   <h1 className="text-info text-center">Reset Pasword</h1>
                   <hr /> 
                   <Form onSubmit={handleOnResetSubmit}>
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
                       <Button type="submit">Reset Pasword</Button>
                   </Form>
                   <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("login")}>Login now</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}