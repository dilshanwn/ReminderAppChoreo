import React, { useState } from 'react';
import './App.css';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

function App() {
  const [username, setUsername] = useState('user1'); // Placeholder for user management

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Reminders</h1>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="add">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="add">Add Reminder</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="list">View Reminders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="add">
                <ReminderForm username={username} />
              </Tab.Pane>
              <Tab.Pane eventKey="list">
                <ReminderList username={username} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
