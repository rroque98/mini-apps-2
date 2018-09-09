import React from 'react';
import EventListEntry from './EventListEntry';

const EventList = ({ data }) => {
  return (
    <div>
    {data.map((event, i) =>
      <EventListEntry key={i} event={event} />)}
    </div>
  );
};

export default EventList;
