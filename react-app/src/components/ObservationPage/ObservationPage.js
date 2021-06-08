import React, { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { fetchObservations } from "../../store/observation";
import Masonry from "react-masonry-css";
import PageHeading from "../Elements/PageHeading";
import ObservationCard from "./ObservationCard";
import ObservationForm from "./ObservationForm";

function ObservationPage({ user }) {
  const dispatch = useDispatch();
  const observations = useSelector((state) => state.observations);

  useEffect(() => {
    dispatch(fetchObservations());
  }, [dispatch, user]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="flex flex-col md:justify-between w-full md:my-6 md:ml-5">
      <div>
        <PageHeading title={"Observations"} />
      </div>
      <div>
        <ObservationForm user={user} />
        <div className="h-screen">
          {/* <div className="flex flex-row flex-wrap items-start"> */}
          {/* <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry> */}
          <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {Object.values(observations).map((observation) => {
                return (
                  <Zoom key={observation.id} duration={500}>
                    <ObservationCard observation={observation} />
                  </Zoom>
                );
              })}
            </Masonry>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ObservationPage;
