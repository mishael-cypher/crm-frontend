import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { BreadcrumbComp } from "../../components/breadcrumb/Breadcrumb";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {}, [formData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted. request received", formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
