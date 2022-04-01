import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, formData }) => {
    console.log(formData)
  return (
    <div className="bg-light p-5 rounded-lg m-3 form-box">
        <h1 className="text-info text-center">Add New Ticket</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              onChange={handleOnChange}
              value={formData.subject}
              placeholder="Subject"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              row="5"
              name="detail"
              value={formData.detail}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="info" >
          Submit
        </Button>
      </Form>
    </div>
  );
};




AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
}