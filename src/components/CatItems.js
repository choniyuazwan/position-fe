import React, { Component } from 'react';
import {
    Accordion,
    Button,
    Card,
    Container,
    Row,
    Col,
  } from 'react-bootstrap';

export default class CatItems extends Component {
    render() {
        // let { title, type, company } = this.props.cats;
        let title, type, company; 
        // if (this.props.cats != null) {
        //     title = this.props.cats.title ? this.props.title : '';
        //     type = this.props.cats.type ? this.props.type : '';
        //     company = this.props.cats.company ? this.props.company : '';            
        // } else {
        //     title = '';
        //     type = '';
        //     company = '';
        // }
        
        title = this.props.cats.title;
        type = this.props.cats.type;
        company = this.props.cats.company;

        return (
            <>
                <Container>
                    <Accordion defaultActiveKey='1'>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col sm={10}>
                                        <Card.Title>{title}</Card.Title>
                                    </Col>
                                    <Col sm={2}>
                                        <Accordion.Toggle as={Button} variant="success" eventKey='0'>
                                            Detail
                                        </Accordion.Toggle>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body>
                                    <Card.Text>
                                        {type}
                                    </Card.Text>
                                    <Card.Text className="font-weight-bold">
                                        {company}
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </>
        );
    }
}
