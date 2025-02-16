import React, { useState, useEffect } from 'react';
import Event from './Event';
import { Alert, Row, Col } from 'react-bootstrap';
import eventsData from '../../events.json';

function Events() {
  const [events, setEvents] = useState(eventsData);
  const [showWelcome, setShowWelcome] = useState(false);

  // Afficher le message de bienvenue après le montage du composant
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Fonction pour réserver un événement
  const handleBook = (index) => {
    const updatedEvents = [...events];
    if (updatedEvents[index].nbTickets > 0) {
      updatedEvents[index].nbParticipants += 1;
      updatedEvents[index].nbTickets -= 1;
      setEvents(updatedEvents);
      alert('You have booked an event');
    }
  };

  // Fonction pour gérer le like/dislike
  const handleLike = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].like = !updatedEvents[index].like;
    setEvents(updatedEvents);
  };

  return (
    <div>
      {showWelcome && (
        <Alert variant="success" onClose={() => setShowWelcome(false)} dismissible>
          Welcome to ESPRIT Events Management!
        </Alert>
      )}

      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4}>
            <Event
              event={event}
              onBook={() => handleBook(index)}
              onLike={() => handleLike(index)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Events;