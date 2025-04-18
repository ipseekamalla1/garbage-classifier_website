import React from "react";
import HeroSlider from "../components/HeroSlider";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Bootstrap Components

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Waste Management Insights Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Waste Management Insights</h2>
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <Card.Title>Recycling Rate</Card.Title>
                  <Card.Text className="display-5 fw-bold text-primary">65%</Card.Text>
                  <Card.Text>Milton's current recycling rate and efforts to improve it.</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <Card.Title>Waste Reduction</Card.Title>
                  <Card.Text className="display-5 fw-bold text-success">120 Tons</Card.Text>
                  <Card.Text>Waste reduced this month through community programs.</Card.Text>
                  <Button variant="success">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <Card.Title>Eco-Friendly Initiatives</Card.Title>
                  <Card.Text className="display-5 fw-bold text-warning">30 Projects</Card.Text>
                  <Card.Text>New sustainability projects launched in 2025.Faclities for everyone.</Card.Text>
                  <Button variant="warning">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section">
        {/* Left Image */}
        <div className="about-image">
          <img src="/images/about.jpg" alt="Milton Waste Management" />
        </div>

        {/* Right Text */}
        <div className="about-content">
          <h2>About Milton Waste Management</h2>
          <p>
            Milton has adopted cutting-edge <strong>AI-driven waste management</strong> 
            to classify and efficiently process waste materials. Our <strong>AI classifiers</strong> 
            identify recyclable and non-recyclable materials, ensuring 
            <strong> eco-friendly disposal</strong> and <strong>reducing landfill waste</strong>.
          </p>
          <p>
            By integrating <strong>machine learning models</strong>, we optimize waste collection 
            routes, minimize environmental impact, and create a <strong>sustainable future</strong> 
            for Milton. Join us in making our city greener and smarter!
          </p>
        </div>
      </section>

      {/* Waste Management Insights Section */}
      <section className="insights-section">
        <h2>Waste Management Insights</h2>
        <div className="card-container">
          {/* Card 1 */}
          <div className="insight-card">
            <img src="/images/c1.jpg" alt="Recycling" />
            <div className="card-body">
              <h5>Smart Recycling</h5>
              <p>AI-powered systems separate recyclables from general waste, reducing pollution.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="insight-card">
            <img src="/images/c3.jpg" alt="Sorting Waste" />
            <div className="card-body">
              <h5>Automated Sorting</h5>
              <p>Advanced classification ensures better waste processing and improved efficiency.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="insight-card">
            <img src="/images/c2.jpg" alt="Waste Collection" />
            <div className="card-body">
              <h5>Optimized Collection</h5>
              <p>AI-powered route planning improves waste collection and reduces carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
