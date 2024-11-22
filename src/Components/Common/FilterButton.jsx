import React, { useState } from "react";

const FilterButtons = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
        { name: "All", count: 29, icon: "📂" },
        { name: "Free", icon: "💲" },
        { name: "Premium", icon: "💎" },
        { name: "Saas", count: 23 },
        { name: "Business", count: 2 },
        { name: "Blog", count: 3 },
        { name: "Documentation", count: 1 },
    ];
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    return (
        <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm">
            {filters.map((filter) => (
                <button
                    key={filter.name}
                    onClick={() => setActiveFilter(filter.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === filter.name
                        ? "bg-teal-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    {filter.icon && <span>{filter.icon}</span>}
                    <span>{filter.name}</span>
                    {filter.count !== undefined && (
                        <span
                            className={`ml-2 px-2 py-0.5 text-xs font-semibold rounded-full ${activeFilter === filter.name ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {filter.count}
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
