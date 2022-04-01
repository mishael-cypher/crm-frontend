import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb.js/Breadcrumb";
import { TicketTable } from "../../components/ticket-table/Table";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page='dashboard'/>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ "font-size": "2rem", padding: "10px 30px" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2">
          <div>Total ticket: 50</div>
          <div>Pending ticket</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          Recently Added tickets
        </Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
