import React, { useState } from "react";
import "./Modal.css";
import "../../App.css";

<<<<<<< HEAD
export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
=======
export default function Modal1() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
>>>>>>> cec72f786ebf8502e5ad1f49a5e6a6876cabca33

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {/* <button onClick={toggleModal} className="add-btn">
        Add
      </button> */}

      {modalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <br />

            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87GI7npiFth1Go4eQaOFhZ1l2PFFg5KLePqjUSru7BmtJrGmElXRBUp2Rmr61ARaI8Gk&usqp=CAU"
              alt="WTF Baby"
            />
            <br />
            <h2>Mensch schreib doch was...</h2>
            <button className="close-modal" onClick={toggleModal}>
              Got It Boss!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
