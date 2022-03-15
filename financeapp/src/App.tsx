import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./Styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./Components/Modal";
import Modal from 'react-modal';

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalopen, setNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
      setNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(){
      setNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>      
      <NewTransactionModal
       isOpen={isNewTransactionModalopen}
       onRequestClose={handleCloseNewTransactionModal}
       />
      <GlobalStyle/>
    </>
  );
}

