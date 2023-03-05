"use client";
import Link from "next/link";
import React, { useState } from "react";
import Pricing1 from "../components/pricing1";
import { Button } from "../components/ui/button";
import Pricing2 from "../components/pricing2";

interface PackageProps {
  name: string;
  description: string;
  price: string;
}

const Package = ({ name, description, price }: PackageProps) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-gray-700">{description}</p>
    <p className="text-gray-700">Price: {price}</p>
  </div>
);

const PartyEvents = () => {
  const packages: PackageProps[] = [
    {
      name: "Basic Package",
      description: "Includes basic party decorations and refreshments.",
      price: "$XXX",
    },
    {
      name: "Deluxe Package",
      description:
        "Includes premium party decorations, refreshments, and entertainment.",
      price: "$XXX",
    },
    {
      name: "Premium Package",
      description:
        "Includes all-inclusive party decorations, refreshments, entertainment, and catering.",
      price: "$XXX",
    },
  ];

  return (
    <div className="px-10">
      <Pricing2 />

      <h1 className="mb-5 text-2xl font-bold">Party Events</h1>
      <h2 className="mt-10 mb-5 text-lg font-bold">Party FAQ</h2>
      {packages.map((pkg) => (
        <Package
          key={pkg.description}
          name={pkg.name}
          description={pkg.description}
          price={pkg.price}
        />
      ))}

      <div className="mt-10 text-center">
        <Link href="/contact" target={"_top"}>
          <Button variant={"giggles"}>Book a Party</Button>
        </Link>
      </div>
    </div>
  );
};

export default PartyEvents;
