const ADD_MOOD = "mood/ADD_MOOD";
const GET_MOODS = "mood/GET_MOODS";
const DELETE_MOOD = "mood/DELETE_MOOD";

const addMood = (payload) => ({
  type: ADD_MOOD,
  payload,
});

const getMoods = (payload) => ({
  type: GET_MOODS,
  payload,
});

const deleteMood = (payload) => ({
  type: DELETE_MOOD,
  payload
})


export const fetchMoods = (month, year) => async (dispatch) => {
  const res = await fetch(`/api/moods/?month=${month}&year=${year}`);

  if (res.ok) {
    const moods = await res.json();
    dispatch(getMoods(moods));
  }
};

export const createMood = (mood) => async (dispatch) => {
  const res = await fetch("/api/moods/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: mood.date,
      rating: mood.rating,
      user_id: mood.userId,
    }),
  });

  if (res.ok) {
    const mood = await res.json();
    dispatch(addMood(mood));
  }
};

export const changeMood = (mood) => async (dispatch) => {
  const res = await fetch(`/api/moods/${mood.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: mood.date,
      rating: mood.rating,
      user_id: mood.userId,
    }),
  });

  if (res.ok) {
    const mood = await res.json();
    dispatch(addMood(mood));
  }
};

export const removeMood = (mood) => async (dispatch) => {
  const res = await fetch(`/api/moods/${mood.id}`, {
    method: "DELETE"
  })

  if (res.ok) {
    dispatch(deleteMood(mood))
  }
}

const initialState = {};

export default function moodReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOODS: {
      const newState = {};
      payload.forEach((mood) => {
        newState[new Date(mood.date).getDate()] = mood;
      });
      return newState;
    }

    case ADD_MOOD: {
      const newState = { ...state };
      newState[new Date(payload.date).getDate()] = payload;
      return newState;
    }

    case DELETE_MOOD: {
      const newState = { ...state };
      delete newState[new Date(payload.date).getDate()]
      return newState
    }

    default:
      return state;
  }
}
