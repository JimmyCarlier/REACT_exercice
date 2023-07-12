import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({element}) {
  const handleDelete = (id) =>{
    console.log(id)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.img} />
      <Card.Body>
        <Card.Title>{element.name}</Card.Title>
        <Card.Text>
          {element.address}
        </Card.Text>
        <Card.Text>{element.phone}</Card.Text>
        <Button variant="primary" onClick={()=> handleDelete(element.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample