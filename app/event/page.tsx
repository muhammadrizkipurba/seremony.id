import MainLayout from '@/components/layout/MainLayout'
import EventCardList from './EventCardList'
import { SeremonyEvents } from '@/constant'

const EventsPage = () => {
  return (
    <MainLayout>
      <main>
        <div className='relative overflow-x-hidden'>
          <div className='w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] bg-secondary-green absolute right-0 top-0 z-10' />
          <div className='w-30 h-[60px] lg:w-60 lg:h-[120px] bg-secondary-red absolute left-0 bottom-0 bg-[url("/patterns/small-pattern-horizontal.png")] z-10' />
          <div className='bg-primary-cultures py-20'>
            <div className='custom-container relative z-30 flex items-center justify-center'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Seremony Event</h1>
            </div>
          </div>
        </div>
        
        <div className='custom-container pb-16 pt-8'>
          <div className='flex flex-col gap-y-4'>
            <EventCardList eventsData={SeremonyEvents} />
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default EventsPage