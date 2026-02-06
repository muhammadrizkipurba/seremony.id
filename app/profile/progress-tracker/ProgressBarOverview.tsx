"use client"
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"
import { ProgresTrackerData } from './ProgressTrackerData'

const ProgressBarOverview = () => {
  return (
    <div className='w-full mt-6 mb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
      {ProgresTrackerData.map((item, idx) => {
        const { 
          vendor_category,
          progress_percentage
        } = item;

        return (
          <div key={`progress_percentage-${vendor_category}-${idx}`} className=' items-center bg-primary-cultures rounded-2xl overflow-hidden border'>
            <div className='border-b p-2 min-h-16 flex items-center justify-center'>
              <h5 className='text-center uppercase font-semibold text-sm'>{vendor_category}</h5>
            </div>
            <div className='py-4 flex justify-center'>
              <AnimatedCircularProgressBar
                value={progress_percentage}
                valueColor={progress_percentage <= 50 ? "text-secondary-red" : progress_percentage > 50 && progress_percentage <= 80 ? "text-primary-yellow" : "text-secondary-green"}
                gaugePrimaryColor={progress_percentage <= 50 ? "#FF473F" : progress_percentage > 50 && progress_percentage <= 80 ? "#FBC80B" : "#02B49A"}
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