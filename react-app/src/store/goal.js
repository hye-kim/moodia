const ADD_GOAL = "goal/ADD_GOAL";
const GET_GOALS = "goal/GET_GOALS";

const addGoal = (payload) => ({
  type: ADD_GOAL,
  payload,
});

const getGoals = (payload) => ({
  type: GET_GOALS,
  payload,
});

export const fetchGoals = () => async (dispatch) => {
  const res = await fetch(`/api/goals/`);

  if (res.ok) {
    const goals = await res.json();
    dispatch(getGoals(goals));
  }
};

export const createGoal = (goal) => async (dispatch) => {
  const res = await fetch("/api/goals/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      created_at: goal.created_at,
      title: goal.title,
      user_id: goal.userId,
    }),
  });

  if (res.ok) {
    const newGoal = await res.json();
    const res2 = await fetch(`/api/goals/${newGoal.id}/steps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        steps: goal.steps,
      }),
    });
    if (res2.ok) {
      const steps = await res2.json();
      newGoal["steps"] = steps;
      dispatch(addGoal(newGoal));
    }
  }
};

const initialState = {};

export default function goalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_GOALS: {
      const newState = {};
      payload.forEach((observation) => {
        newState[observation.id] = observation;
      });
      return newState;
    }
    case ADD_GOAL: {
      const newState = { ...state };
      newState[payload.id] = payload;
      return newState;
    }

    default:
      return state;
  }
}
