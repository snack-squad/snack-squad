import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Restaurant = ({ restaurant }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={restaurant.logo} />
    <Card.Body>

      <Card.Title>{restaurant.restaurant}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{restaurant.days}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">{restaurant.times}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Tags: {restaurant.tags}</Card.Subtitle>

      <Card.Title>Specials</Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{restaurant.specials}</ListGroup.Item>
      </ListGroup>

    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    restaurant: PropTypes.string,
    tags: PropTypes.string,
    owner: PropTypes.string,
    days: PropTypes.string,
    times: PropTypes.string,
    logo: PropTypes.string,
    specials: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
    })),
    // _id: PropTypes.string,
  }).isRequired,
};

export default Restaurant;
