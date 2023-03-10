"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";

const teamMembers = [
  { name: "Jess Ortega", title: "Owner" },
  { name: "Noah Griggs", title: "Owner" },
  { name: "Jess Ortega", title: "Owner" },
  { name: "Noah Griggs", title: "Owner" },
  { name: "Jess Ortega", title: "Owner" },
  { name: "Noah Griggs", title: "Owner" },
];

const team = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100 py-10 pb-20">
      <div className="p-2 sm:text-center">
        <p className="p-2 uppercase text-giggles-yellow">team</p>
        <h2 className="p-2 font-summerVibesSolid text-4xl sm:text-6xl">
          meet the owners
        </h2>
      </div>
      <Carousel
        slideSize="20%"
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
        {teamMembers.map((member, index) => (
          <Carousel.Slide key={index}>
            <div>
              <div className="h-[270px] w-[288px] rounded-lg bg-slate-300"></div>
              <h4 className="text- text-2xl">{member.name}</h4>
              <p className="text-md text-[#515151]/50">{member.title}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default team;
