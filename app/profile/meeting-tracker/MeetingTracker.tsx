import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { MeetingsData } from './MeetingTrackerData';
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

const MeetingTracker = ({data}: {
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

      <div>
        
      </div>
    </div>
  )
}

export default MeetingTracker