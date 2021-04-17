import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
        <Container>
            <Row>
                <Col className="text-center py-3" md={12}>
                    Copyright &copy; Equinox Hub
                </Col>
                <Col>
               <strong>Address :</strong> Chak Ganjaria, C. G. City, Lucknow, Uttar Pradesh 226002
               </Col>
               <Col>
                <strong>Phone Number</strong> +91 002304545
                </Col>
                <Col>
                <strong>Email us: </strong>
                <a href="mailto:site@gmail.com">equinoxcentre@gmail.com</a>  
                </Col>
            
            </Row>
        </Container>
        
    </footer>
    )
}

export default Footer
