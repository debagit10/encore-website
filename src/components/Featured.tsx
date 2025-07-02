import React from "react";
import { Search, Sparkles } from "lucide-react";

const trending = [
  "Paragraph AI",
  "Chatgpt",
  "Claude 3",
  "Claude AI",
  "Claude AI",
  "Claude AI",
  "Claude AI",
];
const categories = [
  "Education",
  "Content Creation",
  "Video Editing",
  "Chat Box & A.I Assistant",
  "Writing",
  "Image Generation",
];

function Featured() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 sm:px-8 py-12 font-sans">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
          FEATURED TOOLS
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Featured <span className="text-blue-600">AI Tools</span>{" "}
          <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-600 rounded-xl text-base">
            <Sparkles className="w-5 h-5 mr-1" />
          </span>{" "}
          Handpicked for You
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          A curated selection of high-performing tools trusted by our community
          and rated for innovation, usability, and impact. Content:
        </p>

        <div className="relative w-full max-w-2xl mx-auto mb-6 h-auto">
          <input
            type="text"
            placeholder="What type of A.I Model are you looking for ?"
            className="w-full border border-gray-300 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 shadow hover:bg-blue-600 transition-colors">
            <Search />
          </button>
        </div>

        <div className="mb-6 text-sm flex flex-wrap justify-center gap-3 text-gray-600">
          <span className="font-medium text-gray-800">Trending Searches</span>
          {trending.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((category, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
