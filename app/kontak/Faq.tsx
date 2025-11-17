import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FAQs } from '@/constant'
import React from 'react'

const Faq = () => {
  return (
    <div>
      <h2 className='text-[30px] lg:text-5xl font-semibold tracking-tight text-center'>Frequently Asked Questions</h2>
      <div className='mt-12'>
        <Accordion type='single' defaultValue='item-0' collapsible>
          {FAQs.map((faq, idx) => {
            return (
              <AccordionItem value={`item-${idx}`} key={`faq-accordion-${idx+1}`} className='data-[state=open]:bg-primary-cultures data-[state=open]:border-2 data-[state=open]:border-primary-orange data-[state=open]:rounded-xl lg:p-5 px-3'>
                <AccordionTrigger>
                  <h4 className='text-lg'>{faq.question}</h4>
                </AccordionTrigger>
                <AccordionContent className='lg:pr-12'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}

export default Faq