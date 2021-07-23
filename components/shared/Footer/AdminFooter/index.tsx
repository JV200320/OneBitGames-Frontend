import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Logo } from '../../Logo';

export const AdminFooter: React.FC = () => {
    return (
        <Container className="p-4">
            <Row>
                <Col>
                    <Logo />
                </Col>

                <Col>
                    <span className="float-right">João Victor de Souza Lucena • joaovictordev2003@gmail.com</span>
                </Col>
            </Row>
        </Container>
    )
}
