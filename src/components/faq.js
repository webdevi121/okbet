import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Faq = props => {
  return (
    <React.Fragment>
      <div className="bg-theme-secondary py-20 text-white">
        <div className="theme-container relative">
          <h2 className="mb-10 text-4xl font-bold text-theme-primary">
            <span className="after:flex after:w-[40px] after:border-[2px] after:border-b after:border-theme-primary">
              Common Enquiries
            </span>
          </h2>
          <Accordion allowZeroExpanded className="grid gap-3 xl:grid-cols-2">
            {props.list.map((item, index) => (
              <AccordionItem
                data-sal="slide-up"
                data-sal-delay={`${index + 2}00`}
                data-sal-easing="ease"
                data-sal-duration="2000"
                key={index}
              >
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {item.questionField}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div dangerouslySetInnerHTML={{ __html: item.answerField }} />
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Faq
