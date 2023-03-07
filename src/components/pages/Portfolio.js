import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <Container className="bg-light p-5">
            <Row>
                <Col>
                    <p className="text-center fs-4 fw-bold">
                        I have worked on several exciting projects, including:
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-4">
                    <div className="p-4 bg-white rounded shadow-sm">
                        <h2 className="text-primary mb-4">Comic Bookies</h2>
                        <p className="text-muted">
                            Comic Bookies is a cutting-edge web application that brings the world of comic books to your fingertips. With two powerful APIs, users can upload posts, share their favorite comics, and connect with other enthusiasts in the community. The user registration and login system ensures that your personal information is always secure.
                        </p>
                    </div>
                </Col>
                <Col md={6} className="mb-4">
                    <div className="p-4 bg-white rounded shadow-sm">
                        <h2 className="text-primary mb-4">What's the Mov</h2>
                        <p className="text-muted">
                            What's the Mov is a revolutionary website that helps you discover new experiences in your area. By using two advanced APIs, the website generates a list of recommended events and breweries based on your preferences and location. Whether you're looking for a night out with friends or a romantic date, What's the Mov has got you covered.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}