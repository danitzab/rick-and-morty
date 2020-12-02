import React, { useContext } from 'react';
import './App.css';

//Contexts
import { StoreContext } from './contexts/StoreContextProvider';

//Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ListOfImages } from './components/ListOfImages';

const App = () => {
  const { isOpen } = useContext(StoreContext);

  return (
    <>
      <Header />
      <div className="container-app container mx-auto px-4 mt-10 text-center">{isOpen ? <Modal /> : <ListOfImages />}</div>
      <Footer />
    </>
  );
};

export default App;
