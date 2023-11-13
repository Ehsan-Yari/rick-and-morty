import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ml-32 mt-10 flex flex-col gap-y-4 max-w-sm">
      <h1 className="font-bold text-6xl text-gray-500">
        Rick & <br /> Morty API
      </h1>
      <div className="h-full flex items-center justify-center gap-x-4">
        <div className="h-12 w-1 bg-gray-500" />
        <p className="font-semibold py-3 text-2xl">
          Find your favorite rick and morty characters
        </p>
      </div>
      <div className="flex items-center justify-center overflow-hidden bg-white rounded-full py-1.5 px-2 border-2 border-gray-500/50">
        <BiSearchAlt size={20} color="#6B7280" />
        <input
          className="focus-within:outline-0 w-full pl-2 placeholder-gray-500 placeholder:font-semibold caret-gray-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          type="text"
        />
      </div>
    </div>
  );
};

export default Hero;
