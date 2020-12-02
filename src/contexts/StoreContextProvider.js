import React, { createContext, useState } from 'react';
import * as Services from '../services/Services';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const getImages = () => {
    setIsLoading(true);
    Services.getImages().then((response) => {
      setIsLoading(false);
      setImages(response.data.results);
      setImage(response.data.results[0]);
    });
  };

  return (
    <StoreContext.Provider
      value={{
        images,
        setImages,
        getImages,
        image,
        setImage,
        isLoading,
        setIsLoading,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
