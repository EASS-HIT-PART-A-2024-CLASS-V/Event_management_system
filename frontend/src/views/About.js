import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css'; // Import CSS for styling (create this file for custom styles)

const About = () => {
    return (
        <div className="about-container">
            <Container>
                <Row>
                    <Col>
                        <h1 className="about-heading">About</h1>
                        <p className="about-description">
                            Welcome to the Event Management System (EMS)! Our platform is designed to streamline event organization and empower users to create memorable experiences effortlessly.
                        </p>
                    </Col>
                </Row>

                <Row className="about-features">
                    <Col>
                        <h3>Key Features</h3>
                        <ul>
                            <li>Create and manage events with detailed information, including date, time, location, and description.</li>
                            <li>Invite other users to your events via email or direct invitations, ensuring seamless collaboration.</li>
                            <li>Efficiently track RSVPs and manage attendee lists, ensuring all logistics are smoothly handled.</li>
                            <li>Stay informed with real-time updates and notifications, keeping you updated throughout the event lifecycle.</li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="about-join">
                            Whether you're organizing a professional conference, educational workshop, or social gathering, our intuitive interface and robust features simplify every aspect of event planning.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="about-conclusion">
                            Join us in transforming event management into a straightforward and enjoyable experience. With EMS, creating and managing events has never been easier!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
