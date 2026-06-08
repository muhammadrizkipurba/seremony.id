import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { SingleMeetingDataProps } from '@/types';

type TasksTableProps = {
  table_id: string;
  agendas: {
    name: string;
    description: string;
  }[] | undefined;
};

const MeetingAgendaTable = ({
  table_id,
  agendas
}: TasksTableProps) => {
  if (!agendas) return null;

  return (
    <Table>
      <TableBody>
        {agendas.map((task, idx) => {
          return (
            <TableRow key={`table-${table_id}-row-${idx}`} className='border-b-0'>
              <TableCell className="lg:w-1/4 p-0">
                <label className='font-semibold'>
                  {idx + 1}. {task.name}
                </label>
              </TableCell>
              {/* <TableCell className="w-full p-0">: {task.description}</TableCell> */}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
};

const MeetingTracker = ({ data }: {
  data: SingleMeetingDataProps
}) => {
  const meetingData = data;
  return (
    <div>
      <div className='bg-gray-200 px-3 py-2'>
        <h5 className='font-bold uppercase '>
          Agenda Meeting :
        </h5>
      </div>
      <div className='hidden lg:block p-3'>
        <MeetingAgendaTable table_id='agendas' agendas={meetingData?.agendas} />
      </div>
      <ul className='block lg:hidden px-3'>
        {meetingData?.agendas.map((agenda, idx) => {
          return (
            <li key={`agenda-${idx}`} className='text-sm mt-3'>
              <strong>{idx + 1}. {agenda.name}</strong>
              {/* <p className='ml-4'>{agenda.description}</p> */}
            </li>
          )
        })}
      </ul>

      <div className='bg-gray-200 px-3 py-2'>
        <h5 className='font-bold uppercase '>
          Informasi Meeting :
        </h5>
      </div>
      <div className='hidden lg:block'>
        <div className='p-3 flex flex-col gap-y-1'>
          <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
            <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm font-semibold'>1. Tanggal Meeting </p>
            <div className='col-span-3 md:col-span-4'>
              <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{meetingData.meeting_date}</strong></p>
            </div>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-6 gap-1 py-2 md:py-0'>
            <p className='col-span-3 md:col-span-2 leading-2 md:leading-normal text-neutral-600 md:text-black text-sm font-semibold'>2. Lokasi Meeting </p>
            <div className='col-span-3 md:col-span-4'>
              <p><span className='px-1 hidden md:inline-block'>:</span> <strong>{meetingData.meeting_location}</strong></p>
            </div>
          </div>
        </div>
      </div>
      <ul className='block lg:hidden px-3'>
        {meetingData?.agendas.map((agenda, idx) => {
          return (
            <li key={`agenda-${idx}`} className='text-sm mt-3'>
              <strong>{idx + 1}. {agenda.name}</strong>
              {/* <p className='ml-4'>{agenda.description}</p> */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MeetingTracker