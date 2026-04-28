"use client"
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"
import { ProductionTrackerData, ProgresTrackerData } from './ProgressTrackerData'

const ProgressBarOverview = () => {
  return (
    <div className='w-full mt-6 mb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
      {ProductionTrackerData.map((item, idx) => {
        const all_tasks = item.stages.map(stage => {
          return stage.tasks;
        });
        const total_tasks = all_tasks.flat().length;
        const completed_tasks = all_tasks.flat().filter(task => task.status === "completed").length;

        const progress_percentage = completed_tasks/total_tasks*100;
        
        const { 
          vendor_category_code,
        } = item;

        return (
          <div key={`progress_percentage-${vendor_category_code}-${idx}`} className=' items-center bg-primary-cultures rounded-2xl overflow-hidden border'>
            <div className='border-b p-2 min-h-16 flex items-center justify-center'>
              <h5 className='text-center uppercase font-semibold text-sm'>{vendor_category_code}</h5>
            </div>
            <div className='py-4 flex justify-center'>
              <AnimatedCircularProgressBar
                value={progress_percentage}
                valueColor={progress_percentage < 50 ? "text-secondary-red" : progress_percentage >= 50 && progress_percentage <= 80 ? "text-primary-yellow" : "text-secondary-green"}
                gaugePrimaryColor={progress_percentage < 50 ? "#FF473F" : progress_percentage >= 50 && progress_percentage <= 80 ? "#FBC80B" : "#02B49A"}
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)" 
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProgressBarOverview