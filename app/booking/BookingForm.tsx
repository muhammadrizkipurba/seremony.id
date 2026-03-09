'use client'
import TextInput from '@/components/form/TextInput'

const BookingForm = () => {
  return (
    <div className='grid grid-cols-2'>
      <div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-bold uppercase mb-10'>Informasi Pemesan</h2>
          <TextInput
            id="customerName"
            name="customerName"
            label="Nama"
            placeholder=""
            value=""
            disabled={false}
            onChange={() => {}}
          />
          <TextInput
            id="customerEmail"
            name="customerEmail"
            label="Email"
            placeholder=""
            value=""
            disabled={false}
            onChange={() => {}}
          />
          <TextInput
            id="customerPhone"
            name="customerPhone"
            label="No. WA"
            placeholder=""
            value=""
            disabled={false}
            onChange={() => {}}
          />
        </div>

        <div className='flex flex-col gap-5 mt-10'>
          <h2 className='text-2xl font-bold uppercase mb-10'>Informasi Event</h2>
          <TextInput
            id="customerName"
            name="customerName"
            label="Tanggal Event"
            placeholder=""
            value=""
            disabled={false}
            onChange={() => {}}
          />
          <TextInput
            id="customerEmail"
            name="customerEmail"
            label="Lokasi Event"
            placeholder=""
            value=""
            disabled={false}
            onChange={() => {}}
          />
          <TextInput
            id="customerPhone"
            name="customerPhone"
            label="Jumlah tamu"
            placeholder=""
            value=""
            disabled={false}
            onChange={() => {}}
          />
        </div>

      </div>

      <div>

      </div>
    </div>
  )
}

export default BookingForm