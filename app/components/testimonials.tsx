"use client";
import { Carousel } from "@mantine/carousel";
import React from "react";

const customerTestimonials = [
  {
    quote:
      "Five year old students are traditionally in kindergarten. At that grade level they should be learning basic concepts in reading, writing and math, and also be improving.",
    author: "Jess Ortega",
    date: "Jan 12, 2023",
  },
  {
    quote:
      "Five year old students are traditionally in kindergarten. At that grade level they should be learning basic concepts in reading, writing and math, and also be improving.",
    author: "Jess Ortega",
    date: "Jan 12, 2023",
  },
  {
    quote:
      "Five year old students are traditionally in kindergarten. At that grade level they should be learning basic concepts in reading, writing and math, and also be improving.",
    author: "Jess Ortega",
    date: "Jan 12, 2023",
  },
  {
    quote:
      "Five year old students are traditionally in kindergarten. At that grade level they should be learning basic concepts in reading, writing and math, and also be improving.",
    author: "Jess Ortega",
    date: "Jan 12, 2023",
  },
];

const testimonials = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col py-10 pb-20">
      <div className="mb-10 p-2 md:text-center">
        <p className="p-2 uppercase text-giggles-yellow">testimonials</p>
        <h2 className="p-2 font-summerVibesSolid text-4xl md:text-6xl">
          fun for everyone
        </h2>
      </div>
      <Carousel
        slideSize="30%"
        slideGap="lg"
        align="center"
        loop
        styles={{
          control: {
            background: "transparent",
            borderColor: "#f7ae47",
            color: "#f7ae47",
            marginTop: "12rem",
          },
        }}
        controlsOffset="47vw"
      >
        {customerTestimonials.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            <div className="flex min-w-[270px] flex-col">
              <div className="h-[128px] w-[128px] rounded-full bg-slate-300"></div>
              <p>&quot;{testimonial.quote}&quot;</p>
              <div className="flex-1">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.date}</p>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default testimonials;
