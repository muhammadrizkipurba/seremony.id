import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ProductionTrackerData, ProgresTrackerData } from './ProgressTrackerData'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type TasksTableProps = {
  table_id: string;
  tasks: {
    name: string;
    // time_started: string;
    // time_completed: string;
    // pic: string;
    // priority: string;
    status: string;
    notes: string;
    image: string;
  }[];
};

const TasksTable = ({
  table_id,
  tasks
}: TasksTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Nama Pekerjaan</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center w-[100px]">Bukti Foto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, idx) => {
          return (
            <TableRow key={`table-${table_id}-row-${idx}`}>
              <TableCell className="">{task.name}</TableCell>
              <TableCell className={`text-center capitalize text-xs ${task.status === "pending" ? "text-red-600" : task.status === "on progress" ? "text-yellow-500" : "text-green-600"}`}>{task.status || "-"}</TableCell>
              <TableCell className="text-center">
                { task.image ? 
                  <a href={task.image} rel="noopener noreferrer" target='__blank' className={`text-xs cursor-pointer! ${task.image ? "text-primary-orange" : "text-gray-400"}`}>
                    Lihat foto
                  </a>
                : <button disabled className='text-xs cursor-not-allowed text-gray-400'>
                  Lihat foto</button>}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
};

const ProgressTracker = () => {
  return (
    <div>
      <Accordion type='single' defaultValue='item-0' collapsible className='flex flex-col gap-4'>
        {ProductionTrackerData.map((item, idx) => {
          return (
            <AccordionItem value={`item-${idx}`} key={`faq-accordion-${idx + 1}`} className='rounded-xl overflow-hidden border'>
              <AccordionTrigger className='data-[state=open]:text-white data-[state=open]:bg-secondary-foreground hover:bg-accent-foreground/10 px-3 [&[data-state=open]>svg]:text-white'>
                <h4 className='text-md uppercase font-semibold'>{item.vendor_category} - {item.vendor_name}</h4>
              </AccordionTrigger>
              {item.stages.map((stage, sidx) => {
                return (
                  <AccordionContent className='' key={`${item.vendor_category}-${sidx}`}>
                    <h5 className='font-semibold p-3 bg-gray-300'>{stage.phase}</h5>
                    <div className='px-1'>
                      <TasksTable table_id={stage.phase} tasks={stage.tasks} />
                    </div>
                  </AccordionContent>
                )
              })}
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default ProgressTracker