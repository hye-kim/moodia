import React, { useState } from "react";
import Modal from "react-modal";
import { Zoom } from "react-awesome-reveal";
import ObservationModal from "./ObservationModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
    maxHeight: "calc(100vh - 2rem)",
  },
  overlay: {
    position: "fixed",
    zIndex: 1000,
    overflowY: "auto",
  },
};

Modal.setAppElement("#root");

function ObservationCard({ observation }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsOpen(true)}
          className="absolute transition duration-200 flex justify-center overflow-hidden items-center w-full h-full m-1 z-49 opacity-0 font-lg text-white cursor-pointer hover:bg-black hover:opacity-50"
        >
          Open observation
        </div>
        <img
          src={observation.picture_url}
          alt="observation"
          className="w-96 m-1"
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <Zoom duration={500}>
          <ObservationModal observation={observation} setIsOpen={setIsOpen} />
        </Zoom>
      </Modal>
    </>
  );
}

export default ObservationCard;
