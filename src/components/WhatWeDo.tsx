'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, faCode, faMobileAlt, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'swiper/css'
import 'swiper/css/navigation'
import style from "@/styles/WhatWeDo.module.css"
import Image from 'next/image'

const WhatWeDo = () => {
  const swiperRef = useRef<any>(null)

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const services = [
    {
      icon: faGlobe, 
      title: 'Website Design', 
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      icon: faCode, 
      title: 'Web Development', 
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      icon: faMobileAlt, 
      title: 'Mobile App Development', 
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    { 
      icon: faRocket, 
      title: 'Marketing', 
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
     },
  ];

  return (
    <main className="px-4 py-8 sm:px-8 lg:px-16">
      <div className={style.container}>
      <Image
        src="/Rectangle.svg"
        height={2000}
        width={2000}
        alt='bg Circle'
        className="absolute z-[-1] h-[400px] left-[-300px] pt-[80px] opacity-50"
      />
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">What We Do</h2>
        <h3 className="text-center text-xl sm:text-2xl lg:text-3xl mb-8">For Your <span className="yellowLine">Business</span></h3>

        <div className="flex flex-col-reverse sm:flex-row gap-4 mt-10">
          <Swiper
            className="w-full"
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="p-3">
                <div className="mx-auto w-[90%] h-[192px] bg-white p-4 shadow-md rounded-lg">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-3xl p-2"
                  />
                  <h1 className="my-2 text-lg text-dark font-bold uppercase">{service.title}</h1>
                  <p className="text-sm text-dark">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        <div className="flex justify-center sm:justify-start w-full sm:w-auto mt-auto sm:mt-0 space-x-2">
            <button onClick={handlePrev}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="text-3xl text-dark hover:text-purple-800"
                aria-label="prev button"
              />
            </button>
            <button onClick={handleNext}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="text-3xl text-dark hover:text-purple-800"
                aria-label="next button"
              />
            </button>
          </div>
      </div>
    </main>
  )
}

export default WhatWeDo
