"use client";
import { Carousel } from "@mantine/carousel";
import React from "react";

const testimonials = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col py-10 pb-20">
      <div className="mb-10 text-center">
        <p className="uppercase text-giggles-yellow">testimonials</p>
        <h2 className="font-summerVibesSolid text-6xl">fun for everyone</h2>
      </div>
      <Carousel
        slideSize="25%"
        slideGap="sm"
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
        <Carousel.Slide>
          <div className="flex flex-col">
            <div className="h-[128px] w-[128px] rounded-full bg-slate-300"></div>
            <p>
              &quot;Five year old students are traditionally in kindergarten. At
              that grade level they should be learning basic concepts in
              reading, writing and math, and also be improving.&quot;
            </p>
            <div className="flex-1">
              <h4>Jess Ortega</h4>
              <p>Owner</p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="flex flex-col">
            <div className="h-[128px] w-[128px] rounded-full bg-slate-300"></div>
            <p>
              &quot;Five year old students are traditionally in kindergarten. At
              that grade level they should be learning basic concepts in
              reading, writing and math, and also be improving.&quot;
            </p>
            <div className="flex-1">
              <h4>Jess Ortega</h4>
              <p>Owner</p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="flex flex-col">
            <div className="h-[128px] w-[128px] rounded-full bg-slate-300"></div>
            <p>
              &quot;Five year old students are traditionally in kindergarten. At
              that grade level they should be learning basic concepts in
              reading, writing and math, and also be improving.&quot;
            </p>
            <div className="flex-1">
              <h4>Jess Ortega</h4>
              <p>Owner</p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="flex flex-col">
            <div className="h-[128px] w-[128px] rounded-full bg-slate-300"></div>
            <p>
              &quot;Five year old students are traditionally in kindergarten. At
              that grade level they should be learning basic concepts in
              reading, writing and math, and also be improving.&quot;
            </p>
            <div className="flex-1">
              <h4>Jess Ortega</h4>
              <p>Owner</p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="flex flex-col">
            <div className="h-[128px] w-[128px] rounded-full bg-slate-300"></div>
            <p>
              &quot;Five year old students are traditionally in kindergarten. At
              that grade level they should be learning basic concepts in
              reading, writing and math, and also be improving.&quot;
            </p>
            <div className="flex-1">
              <h4>Jess Ortega</h4>
              <p>Owner</p>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default testimonials;
