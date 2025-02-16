import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Event({ event, onBook, onLike }) {
  const { name, description, img, price, nbTickets, nbParticipants, like } = event;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Tickets available: {nbTickets}</Card.Text>
        <Card.Text>Participants: {nbParticipants}</Card.Text>
        <Button
          variant={nbTickets === 0 ? 'secondary' : 'primary'}
          onClick={onBook}
          disabled={nbTickets === 0}
        >
          {nbTickets === 0 ? 'Sold Out' : 'Book an event'}
        </Button>
        <Button variant={like ? 'danger' : 'outline-danger'} onClick={onLike} style={{ marginLeft: '10px' }}>
          {like ? 'Dislike' : 'Like'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;