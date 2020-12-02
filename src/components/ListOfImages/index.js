import React, { useContext, useState } from 'react';

// Contexts
import { StoreContext } from '../../contexts/StoreContextProvider';

// Components
import { ImgContainer } from '../ImgContainer';

// Styles
import '../../index.css';

export const ListOfImages = () => {
  const { image, images, setImage, isLoading } = useContext(StoreContext);
  const [index, setIndex] = useState(0);

  const changeIndex = (newIndex) => {
    setIndex(newIndex);
    setImage(images[newIndex]);
  };

  return (
    <div className="grid grid-cols-1 text-center">
      {isLoading ? (
        <img src="https://en-coloradosprings.com/wp-content/themes/geocrafttheme-v2/images/ajax_loader.gif" alt="loading" />
      ) : (
        <div>
          <ImgContainer image={image.image} title={image.name} maxIndex={images.length - 1} index={index} changeIndex={changeIndex} />
        </div>
      )}
    </div>
  );
};
