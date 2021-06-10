import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Zoom } from "react-awesome-reveal";
import Button from "../Elements/Button";
import PageHeading from "../Elements/PageHeading";
import GoalCard from "./GoalCard";
import GoalForm from "./GoalForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals } from "../../store/goal";

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
    width: "50%",
  },
  overlay: {
    position: "fixed",
    zIndex: 1000,
    overflowY: "auto",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
};

Modal.setAppElement("#root");

function GoalPage({ user }) {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col md:justify-between w-full md:my-6 md:ml-5">
        <div className="flex flex-row justify-between">
          <PageHeading title="Goals" />
          <div>
            <Button text="+ Add Goal" onClick={() => setIsOpen("goal-form")} />
          </div>
        </div>
        <div>
          <div className="h-screen flex flex-row">
            {Object.values(goals).map((goal) => {
              return (
                <Zoom key={goal.id} duration={500}>
                  <GoalCard goal={goal} />
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen === "goal-form"}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <Zoom duration={500}>
          <GoalForm setIsOpen={setIsOpen} user={user} />
        </Zoom>
      </Modal>
    </>
  );
}

export default GoalPage;
