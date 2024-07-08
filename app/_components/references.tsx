import React from "react";

const ArrowUpRight = ({className = "", size = 24 }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
    </svg>
);

const References: React.FC = () => {
  const references = [
    {
      icon: "W",
      siteName: "Wikipedia",
      siteHead: "Concurrency (computer",
      iconBg: "bg-white",
      iconColor: "text-black",
    },
    {
      icon: "▶",
      siteName: "YouTube",
      siteHead: "Multi-threading",
      iconBg: "bg-red-600",
      iconColor: "text-white",
    },
    {
      icon: "≡",
      siteName: "StackOverflow",
      siteHead: "Multithreading - What is",
      iconBg: "bg-orange-500",
      iconColor: "text-white",
    },
    {
      icon: "M",
      siteName: "Medium",
      siteHead: "Concurrency and Async",
      iconBg: "bg-white",
      iconColor: "text-black",
    },
    {
      icon: "📖",
      siteName: "Book",
      siteHead: "Grokking Concurrency",
      iconBg: "bg-white",
      iconColor: "text-black",
    },
  ];




  return (
    <div className="">
      <h2 className="text-primary text-base font-semibold mb-2">References</h2>
      <ul className="space-y-2">
        {references.map((reference, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div
                    className={`flex-none w-8 h-8 ${reference.iconBg} ${reference.iconColor} rounded-lg flex items-center justify-center text-xl font-bold`}
                >
                    {reference.icon}
                </div>
                <div className="flex-1 overflow-hidden">
                    <p className="text-secondary text-sm">{reference.siteName}</p>
                    <div className="flex space-x-1">
                        <p className="text-primary text-nowrap"> {reference.siteHead} </p>
                        <ArrowUpRight className="text-primary" size={16} />
                    </div>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
