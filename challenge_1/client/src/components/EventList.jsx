import React from 'react';
import EventListEntry from './EventListEntry';


const EventList = ({ data }) => {
  return (
    <div>
    {data.map((event) =>
      <EventListEntry description={event.description} />)}
    </div>
  );
};

export default EventList;