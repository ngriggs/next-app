"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
const team = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100 py-10 pb-20">
			<div className="m-4 ml-40">
				<p className="uppercase text-giggles-yellow">team</p>
				<h2 className="font-summerVibesSolid text-6xl">meet the owners</h2>
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
				<Carousel.Slide>
					<div>
						<div className="h-[270px] w-[288px] rounded-lg bg-slate-300"></div>
						<h4>Jess Ortega</h4>
						<p>Owner</p>
					</div>
				</Carousel.Slide>
				<Carousel.Slide>
					<div>
						<div className="h-[270px] w-[288px] rounded-lg bg-slate-300"></div>
						<h4>Jess Ortega</h4>
						<p>Owner</p>
					</div>
				</Carousel.Slide>
				<Carousel.Slide>
					<div>
						<div className="h-[270px] w-[288px] rounded-lg bg-slate-300"></div>
						<h4>Jess Ortega</h4>
						<p>Owner</p>
					</div>
				</Carousel.Slide>
				<Carousel.Slide>
					<div>
						<div className="h-[270px] w-[288px] rounded-lg bg-slate-300"></div>
						<h4>Jess Ortega</h4>
						<p>Owner</p>
					</div>
				</Carousel.Slide>
				<Carousel.Slide>
					<div>
						<div className="h-[270px] w-[288px] rounded-lg bg-slate-300"></div>
						<h4>Jess Ortega</h4>
						<p>Owner</p>
					</div>
				</Carousel.Slide>
			</Carousel>
		</div>
	);
};

export default team;
