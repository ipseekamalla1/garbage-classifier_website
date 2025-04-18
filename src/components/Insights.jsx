import React from 'react'

const Insights = () => {
  return (
    <div>
   
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
                  <Card.Text>New sustainability projects launched in 2025.</Card.Text>
                  <Button variant="warning">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Insights
