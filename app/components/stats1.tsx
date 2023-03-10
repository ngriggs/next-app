import React from "react";

const stats = [
  {
    color: "text-giggles-red",
    stat: "77",
    title: "giggles and counting",
    description: "# of visits to our play space",
  },
  {
    color: "text-giggles-blue",
    stat: "07",
    title: "celebrations and counting",
    description: "# of gatherings hosted at giggles",
  },
  {
    color: "text-giggles-green",
    stat: "14",
    title: "families and counting",
    description: "# of families who've joined the giggles community",
  },
];

const stats1 = () => {
  return (
    <div className="flex h-[300px] max-w-7xl flex-col p-4 md:flex-row">
      {stats.map((stat) => (
        <div key={stat.title} className="my-auto ml-10 flex flex-row">
          <div className="my-auto">
            <p className={`text-6xl ${stat.color}`}>{stat.stat}</p>
          </div>
          <div className="my-auto ml-4 flex flex-col">
            <p>{stat.title}</p>
            <p className="text-[#333333]/50">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default stats1;
