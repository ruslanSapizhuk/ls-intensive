import React from 'react';

export default function Marquee() {
  return (
    <div className="relative overflow-hidden h-10">
      <div className="absolute w-full flex animate-marquee">
        <div className="flex-shrink-0">
          Ваш біжучий текст &nbsp;&nbsp;&nbsp; Ваш біжучий текст &nbsp;&nbsp;&nbsp; Ваш біжучий текст
        </div>
        <div className="flex-shrink-0">
          Ваш біжучий текст &nbsp;&nbsp;&nbsp; Ваш біжучий текст &nbsp;&nbsp;&nbsp; Ваш біжучий текст
        </div>
      </div>
    </div>
  );
}

