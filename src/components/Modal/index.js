import React, { useState, useContext } from 'react';
import { StyledModal } from './styles';
import { ModalProvider } from 'styled-react-modal';
import { FadingBackground } from './styles';

// Contexts
import { StoreContext } from '../../contexts/StoreContextProvider';

// Icons
import logo from '../../assets/images/logo2-png.png';

export const Modal = () => {
  const [opacity, setOpacity] = useState(0);
  const { isOpen, setIsOpen, isLoading, getImages } = useContext(StoreContext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  const startApp = () => {
    toggleModal();
    getImages();
  };

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-black font-rockSalt mt-4">Personajes Rick and Morty</h1>
          {isLoading ? (
            <img src="https://en-coloradosprings.com/wp-content/themes/geocrafttheme-v2/images/ajax_loader.gif" alt="loading" />
          ) : (
            <img className="m-auto sm:w-auto md:w-10/12 mt-3" src={logo} alt="logo" />
          )}
          <button
            className="font-bold py-2 px-4 rounded bg-teal-500 text-white hover:bg-teal-700 focus:outline-none mb-4"
            onClick={startApp}
          >
            Ver personajes
          </button>
        </div>
      </StyledModal>
    </ModalProvider>
  );
};
