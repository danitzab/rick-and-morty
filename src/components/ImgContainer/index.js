import React from 'react';

// Icons
import right from '../../assets/icons/chevron-right.svg';
import left from '../../assets/icons/chevron-left.svg';

export const ImgContainer = ({ image, title, maxIndex, index, changeIndex }) => {
  return (
    <>
      <h1 className="text-2xl font-black font-rockSalt">{title}</h1>
      {index > 0 && (
        <button
          className="inline border  bg-teal-500 border-teal-500 border-solid rounded-full p-1 mr-2 focus:outline-none"
          onClick={() => changeIndex(index - 1)}
        >
          <img src={left} alt="chevron-left" />
        </button>
      )}
      <img className="inline mt-8 h-2/5 sm: w-3/4 md:w-auto" src={image} alt="img" />
      {index < maxIndex && (
        <button
          className="inline border  bg-teal-500 border-teal-500 border-solid rounded-full p-1 ml-2 focus:outline-none"
          onClick={() => changeIndex(index + 1)}
        >
          <img src={right} alt="chevron-right" />
        </button>
      )}
    </>
  );
};
