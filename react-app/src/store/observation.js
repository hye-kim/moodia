const ADD_OBSERVATION = "observation/ADD_OBSERVATION";
const GET_OBSERVATIONS = "observation/GET_OBSERVATIONS";
const DELETE_OBSERVATION = "observation/DELETE_OBSERVATION";

const addObservation = (payload) => ({
  type: ADD_OBSERVATION,
  payload,
});

const getObservations = (payload) => ({
  type: GET_OBSERVATIONS,
  payload,
});

const deleteObservation = (payload) => ({
  type: DELETE_OBSERVATION,
  payload,
});

export const fetchObservations = () => async (dispatch) => {
  const res = await fetch(`/api/observations/`);

  if (res.ok) {
    const observations = await res.json();
    dispatch(getObservations(observations));
  }
};

export const createObservation = (observation) => async (dispatch) => {
  const res = await fetch("/api/observations/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      picture_url: observation.pictureUrl,
      body: observation.body,
      user_id: observation.userId,
    }),
  });

  if (res.ok) {
    const observation = await res.json();
    dispatch(addObservation(observation));
  }
};

export const createObservationBody = (observation) => async (dispatch) => {
    const res = await fetch(`/api/observations/${observation.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: observation.body,
      }),
    });

    if (res.ok) {
      const observation = await res.json();
      dispatch(addObservation(observation));
    }
  };

export const removeObservation = (observation) => async (dispatch) => {
  const res = await fetch(`/api/observations/${observation.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteObservation(observation));
  }
};

const initialState = {};

export default function observationReducer(
  state = initialState,
  { type, payload }
) {
  const newState = { ...state };
  switch (type) {
    case GET_OBSERVATIONS: {
      payload.forEach((observation) => {
        newState[observation.id] = observation;
      });
      return newState;
    }
    case ADD_OBSERVATION: {
      newState[payload.id] = payload;
      return newState;
    }
    case DELETE_OBSERVATION: {
      delete newState[payload.id];
      return newState;
    }

    default:
      return state;
  }
}
