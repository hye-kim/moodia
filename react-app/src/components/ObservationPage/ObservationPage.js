import React, { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { fetchObservations } from "../../store/observation";
import PageHeading from "../Elements/PageHeading";
import ObservationCard from "./ObservationCard";
import ObservationForm from "./ObservationForm";

function ObservationPage({ user }) {
  const dispatch = useDispatch();
  const observations = useSelector((state) => state.observations);

  useEffect(() => {
    dispatch(fetchObservations());
  }, [dispatch, user]);

  return (
    <div className="flex flex-col md:justify-between w-full md:my-6 md:ml-5">
      <div>
        <PageHeading title={"Observations"} />
      </div>
      <div>
        <ObservationForm user={user} />
        <div className="h-screen">
          <div className="flex flex-row flex-wrap items-start">
            {Object.values(observations).map((observation) => {
              return (
                <Zoom key={observation.id} duration={500}>
                  <ObservationCard observation={observation} />
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObservationPage;
