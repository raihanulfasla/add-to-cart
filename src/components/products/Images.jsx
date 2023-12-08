import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function Images() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2olTVo6Pgg1pqAD5ne0BACWNzvj8oNy3g&usqp=CAU" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Images;