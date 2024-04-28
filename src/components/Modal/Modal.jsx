import React, { useState } from "react";
import "./Modal.css";
import "../../App.css";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="add-btn">
        Add
      </button>

      {modalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Mensch schreib doch was...</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87GI7npiFth1Go4eQaOFhZ1l2PFFg5KLePqjUSru7BmtJrGmElXRBUp2Rmr61ARaI8Gk&usqp=CAU"
              alt="WTF Baby"
            />
            <button className="close-modal" onClick={toggleModal}>
              Got It Boss!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
