import React from 'react';

export const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="text-2xl font-black tracking-tight font-rockSalt">Rick and Morty</span>
      </div>
    </nav>
  );
};
