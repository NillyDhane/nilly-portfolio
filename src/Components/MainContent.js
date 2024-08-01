import React from "react";

const MainContent = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center animate-amethyst-midnight z-10">
      <div className="text-center px-4 flex flex-col items-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
          <span className="hand-wave mr-10">👋</span>
          <span className="block sm:inline"> Nilacksha here!</span>
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          I'm currently a second year Software Engineering student spending his
          freetime learning full-stack web development. In my spare time I have
          a passion for tech, fitness, and cars.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
