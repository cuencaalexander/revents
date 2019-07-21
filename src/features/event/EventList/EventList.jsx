import React, { Component, Fragment } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListItem from './EventListItem';

class EventList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map(event => (
                    <EventListItem key={event.id} event={event}/>
                ))}
            </Fragment>
        )
    }
}

export default EventList