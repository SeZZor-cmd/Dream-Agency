'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "@/styles/Recent.module.css"

export default function RecentWork() {
  const swiperRef = useRef<any>(null);

  const projects = [
    {
      title: "UI Soup",
      description: "Best Free design resources for UI/UX designers.",
      imageUrl: "/image/UI Soup.jpeg", 
      link: "#",
    },
    {
      title: "Goldcrown Labs",
      description: "Premium Websites & Apps for Startups.",
      imageUrl: "/image/GoldCrown.png", 
      link: "#",
    },
    {
      title: "Close Concierge",
      description: "Texas Transaction Coordinator.",
      imageUrl: "/image/Concierge.jpeg", 
      link: "#",
    },
  ];

  return (
    <main className='overflow-hidden'>
      
      <div className="relative py-16 px-4 md:px-8 lg:px-16">
      
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent Work By Our <span className={styles.yellowLine}>Experts</span>
          </h2>
          <p className="text-purple-950 mb-12 max-w-3xl mx-auto">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Image
        src="/RecentRect.svg"
        height={2000}
        width={2000}
        alt='background Rect'
        className='absolute z-[-1] h-[300px] right-[-300px] opacity-30'
      />
          <Swiper
            className="w-full"
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 3,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="p-3">
                <div className="mx-auto w-[90%] bg-white p-4 shadow-md rounded-lg">
                  <div className="relative flex justify-center items-center">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={320}
                      height={180}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 bg-purple-950 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
                    >
                      View Work
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center space-x-2 sm:justify-start w-full sm:w-auto mt-auto sm:mt-0">
            <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="text-3xl text-dark hover:text-purple-800"
                aria-label="prev button"
              />
            </button>
            <button onClick={() => swiperRef.current?.swiper.slideNext()}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="text-3xl text-dark hover:text-purple-800"
                aria-label="next button"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
