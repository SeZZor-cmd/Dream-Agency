import React from 'react'
import styles from "@/styles/Testimonial.module.css"
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      author: "UI Soup",
    },
    {
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      author: "UI Soup",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Testimonials: What Our Clients Are <span className={styles.yellowLine}>Saying</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 mx-2 text-left flex flex-col">
              <div className="text-yellow-500 mb-4">
                <FontAwesomeIcon icon={faQuoteRight} className='h-[50px]'/>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">{testimonial.text}</p>
              <p className="font-bold text-yellow-500">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
