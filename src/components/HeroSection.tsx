"use client"
import React from 'react'
import Image from 'next/image'
import style from "@/styles/HeroSection.module.css"


export default function HeroSection() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <div className="space-x-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 p-8 order-2 md:order-1">
            <h1 className="md:text-7xl font-bold text-purple-950">
              <b>We Help you</b>
              <br />
              <span className="font-thin"><b>to grow your</b></span>
              <br />
              <span className={style.yellowLine}><b>Business</b></span>
            </h1>
            <p className="mt-4 text-purple-950">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="mt-8 bg-purple-950 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2 p-8 flex justify-center order-1 md:order-2 md:mb-0 mb-8 relative">
            <Image
              src="/image/Hero-Img.png"
              alt="Dream Agency"
              className="object-none object-right relative z-10 lg:-left-20 md:-left-0 sm:-left-0"
              width={650}
              height={650}
            />
            <Image
              src="/DottedCircle.svg"
              layout="fill"
              objectFit="contain"
              alt="bg DottedCircle"
              className="absolute top-0 left-0 z-[-1] w-[900px] h-[900px]"
            />
            <Image
              src="/Blob.svg"
              layout="fill"
              objectFit="contain"
              alt="bg Blob"
              className="absolute top-0 left-0 z-[-2] w-[700px] h-[700px]"
            />
          </div>
        </div>
      </main>
      
    </>
  )
}
