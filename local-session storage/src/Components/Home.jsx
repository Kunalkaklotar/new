import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
   return (
      <>
         <Navbar className='py-3' variant="dark">
            <Container>
               <Navbar.Brand href="#home">
                  <img
                     alt=""
                     src="https://logos-world.net/wp-content/uploads/2021/09/McLaren-Logo.png"
                     width="auto"
                     height="70px"
                     className="d-inline-block align-top"
                  />{' '}
               </Navbar.Brand>
               <Nav>
                  <Nav.Link className='px-3' href="#home">Home</Nav.Link>
                  <Nav.Link className='px-3' href="#blog">Blog</Nav.Link>
                  <Nav.Link className='px-3' href="#service">Service</Nav.Link>
                  <Nav.Link className='px-3' href="#about-us">About us</Nav.Link>
                  <Nav.Link className='px-3' href="#contect-us">Contect us</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
         <section className='bg-section'>
            <Container>
               <Row className='align-items-center'>
                  <Col>
                     <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/95143/exterior-left-front-three-quarter.jpeg" alt="" />
                  </Col>
                  <Col>
                     <h1>McLaren Automotive</h1>
                     <p>McLaren Automotive's official global website. Discover McLaren's breathtaking performance road cars, configure your own supercar and find a retailer.</p>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   )
}

export default Home
