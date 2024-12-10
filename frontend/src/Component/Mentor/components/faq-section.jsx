import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How to find a specialist?",
      answer: "You can use our search filters to find the perfect mentor based on skills, industry, experience, and more.",
    },
    {
      question: "What services can be in scope?",
      answer: "Our mentors offer various services including career guidance, skill development, interview preparation, and leadership coaching.",
    },
    {
      question: "How to choose an expert?",
      answer: "Review mentor profiles, ratings, and testimonials to find someone who matches your goals and expertise needs.",
    },
    {
      question: "What is expected of me during the consultation period?",
      answer: "Be prepared, engaged, and open to feedback. Set clear goals and communicate effectively with your mentor.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          Still have questions?
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

