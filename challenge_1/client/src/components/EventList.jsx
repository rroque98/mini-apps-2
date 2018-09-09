import React from 'react';
import PropTypes from 'prop-types';
import EventListEntry from './EventListEntry';

const EventList = ({ data }) => (
  <div>
    {data.map((event, i) => <EventListEntry key={i} event={event} />)}
  </div>
);

EventList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EventList;
