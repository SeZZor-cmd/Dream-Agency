'use client'
import React from 'react'

export default function Footer() {
  return (
    <div
      id="contact-us"
      className="bg-black w-full rounded-tr-2xl sm:rounded-tr-full flex flex-col flex-wrap sm:flex-row sm:flex-nowrap justify-between items-center gap-y-10 sm:gap-1 text-white mt-8 p-8"
      style={{ backgroundImage: `url('/public/FooterBackground.svg')` }}
    >
      <div className="basis-1/2">
        <h1 className="text-3xl">
          Dream Agency
        </h1>
        <p className="text-sm leading-snug mt-5">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </p>
        <h1 className="font-semibold mt-4">
          GET IN TOUCH
        </h1>

        <div className="mt-8 flex p-0 gap-0">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="bg-transparent px-3 text-white ring-white border border-white outline-none placeholder:text-white"
          />
          <button className="bg-white text-black py-2 px-8 font-semibold">
            SEND
          </button>
        </div>
      </div>
      <div className="basis-1/2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13485.334199307982!2d-95.3698037!3d32.35126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649e15eecf9c14f%3A0x2290dca8963d54d7!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1645198795791!5m2!1sen!2sin"
          width="75%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
