import { SingleSeremonyEvent } from '@/types';
import EventCard from './EventCard';

type Props = {
  eventsData: SingleSeremonyEvent[]
};

const EventCardList = ({
  eventsData,
}: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {eventsData.map((event: SingleSeremonyEvent, idx: number) => {
        return (
          <EventCard key={`event-${idx}`} eventData={event} />
        );
      })}
    </div>
  )
}

export default EventCardList