const ADD_GOAL = "goal/ADD_GOAL";
const GET_GOALS = "goal/GET_GOALS";
const DELETE_GOAL = "goal/DELETE_GOAL";
const DELETE_STEP = "goal/DELETE_STEP";

const addGoal = (payload) => ({
  type: ADD_GOAL,
  payload,
});

const getGoals = (payload) => ({
  type: GET_GOALS,
  payload,
});

const deleteGoal = (payload) => ({
  type: DELETE_GOAL,
  payload,
});

const deleteStep = (payload) => ({
  type: DELETE_STEP,
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
      const goalWithSteps = await res2.json();
      dispatch(addGoal(goalWithSteps));
    }
  }
};

export const changeGoal = (goal) => async (dispatch) => {
  const res = await fetch(`/api/goals/${goal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: goal.title,
    }),
  });

  if (res.ok) {
    const goal = await res.json()
    dispatch(addGoal(goal));
  }
};

export const removeGoal = (goal) => async (dispatch) => {
  const res = await fetch(`/api/goals/${goal.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteGoal(goal));
  }
};

export const changeStep = (step) => async (dispatch) => {
  const res = await fetch(`/api/goals/${step.goal_id}/steps/${step.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...step }),
  });

  if (res.ok) {
    const goal = await res.json();
    dispatch(addGoal(goal));
  }
};

export const removeStep = (step) => async (dispatch) => {
  const res = await fetch(`/api/goals/${step.goal_id}/steps/${step.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const goal = await res.json()
    dispatch(addGoal(goal));
  }
};

const initialState = {};

export default function goalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_GOALS: {
      const newState = {};
      payload.forEach((goal) => {
        const newSteps = {};
        goal.steps.forEach((step) => {
          newSteps[step.id] = step;
        });
        goal.steps = newSteps;
        newState[goal.id] = goal;
      });
      return newState;
    }

    case ADD_GOAL: {
      const newState = { ...state };
      const newSteps = {};
      payload.steps.forEach((step) => {
        newSteps[step.id] = step;
      });
      payload.steps = newSteps;
      newState[payload.id] = payload;
      return newState;
    }

    case DELETE_GOAL: {
      const newState = { ...state };
      delete newState[payload.id];
      return newState;
    }

    default:
      return state;
  }
}
