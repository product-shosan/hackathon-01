import EventCard, { Event } from "./EventCard";

type Props = {
  events: Event[];
};

const EventGrid = ({ events }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventGrid;