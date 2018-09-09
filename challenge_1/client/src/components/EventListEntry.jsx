import React from 'react';
import PropTypes from 'prop-types';

const EventListEntry = ({ event }) => (
  <div className="event-container">
    <div>
      <span className="bold-text">
        Date:
        {' '}
      </span>
      {event.date}
    </div>
    <div>
      <span className="bold-text">
        Description:
        {' '}
      </span>
      {event.description}
    </div>
  </div>
);

EventListEntry.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventListEntry;
