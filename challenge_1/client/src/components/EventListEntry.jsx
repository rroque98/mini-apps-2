import React from 'react';

const EventListEntry = ({ event }) => {
  return (
    <div className='event-container'>
      <div><span className='bold-text'>Date: </span>{event.date}</div>
      <div><span className='bold-text'>Description: </span>{event.description}</div>
    </div>
  );
};

export default EventListEntry;