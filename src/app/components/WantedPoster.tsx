import React from "react";
import Image from "next/image";

export default function WantedPoster() {
  return (
    <div className="border-4 border-black max-w-xl mx-auto my-8 p-6 text-center bg-white/90 dark:bg-[#f4e1c1] text-black">
      <h1 className="text-5xl font-extrabold mb-4 font-headline">WANTED</h1>
      <p className="mb-2 font-body">
        Placeholder description about who you are. (This will be updated later)
      </p>
      <div className="relative flex items-center justify-center my-4">
        <hr className="w-full border-black" />
        <span className="absolute bg-white px-2 text-sm font-body">ONLY ACCEPTED HIRED</span>
      </div>
      <div className="my-4">
        <Image
          src="/placeHolder.jpg"
          alt="Your portrait"
          width={200}
          height={200}
          className="mx-auto border border-black"
        />
      </div>
      <h2 className="text-3xl font-bold mt-4 font-headline">REWARD:</h2>
      <p className="mt-2 text-lg font-body">SCALABLE AND EFFICIENT SYSTEMS OF ANY KIND</p>
    </div>
  );
}
