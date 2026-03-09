import MainLayout from '@/components/layout/MainLayout'
import BookingForm from './BookingForm'

const BookingPage = () => {
  return (
    <MainLayout>
      <main className="min-h-[50vh] custom-container pb-32 pt-12">
        <BookingForm />
      </main>
    </MainLayout>
  )
}

export default BookingPage