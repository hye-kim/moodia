const ADD_HABIT = "habit/ADD_HABIT";
const GET_HABITS = "habit/GET_HABITS";
const DELETE_HABIT = "habit/DELETE_HABIT";

const addHabit = (payload) => ({
  type: ADD_HABIT,
  payload,
});

const getHabits = (payload) => ({
  type: GET_HABITS,
  payload,
});

const deleteHabit = (payload) => ({
  type: DELETE_HABIT,
  payload,
});

export const fetchHabits = () => async (dispatch) => {
  const res = await fetch("/api/habits/");

  if (res.ok) {
    const habits = await res.json();
    dispatch(getHabits(habits));
  }
};

export const createHabit = (habit) => async (dispatch) => {
  const res = await fetch("/api/habits/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: habit.title,
      time: habit.time,
      user_id: habit.userId,
    }),
  });

  if (res.ok) {
    const habit = await res.json();
    dispatch(addHabit(habit));
  }
};

export const changeHabit = (habit) => async (dispatch) => {
  const res = await fetch(`/api/habits/${habit.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: habit.title,
    }),
  });

  if (res.ok) {
    const habit = await res.json();
    dispatch(addHabit(habit));
  }
};

export const removeHabit = (habit) => async (dispatch) => {
  const res = await fetch(`/api/habits/${habit.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteHabit(habit));
  }
};

export const createHabitCompletion = (habit) => async (dispatch) => {
  const res = await fetch(`/api/habits/${habit.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: habit.completed,
      date: habit.date,
    }),
  });

  if (res.ok) {
    const habit = await res.json();
    dispatch(addHabit(habit));
  }
};

export const changeHabitCompletion = (habit) => async (dispatch) => {
  const res = await fetch(
    `/api/habits/${habit.id}/completions/${habit.completionId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: habit.completed,
      }),
    }
  );

  if (res.ok) {
    const habit = await res.json();
    dispatch(addHabit(habit));
  }
};

const initialState = {};

export default function habitReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_HABITS: {
      const newState = {};
      payload.forEach((habit) => {
        const newCompletions = {};
        habit.habit_completions.forEach((completion) => {
          newCompletions[completion.date] = completion;
        });
        habit.habit_completions = newCompletions;
        newState[habit.id] = habit;
      });
      return newState;
    }

    case ADD_HABIT: {
      const newState = { ...state };
      const newCompletions = {};
      payload.habit_completions.forEach((completion) => {
        newCompletions[completion.date] = completion;
      });
      payload.habit_completions = newCompletions;
      newState[payload.id] = payload;
      return newState;
    }

    case DELETE_HABIT: {
      const newState = { ...state };
      delete newState[payload.id];
      return newState;
    }

    default:
      return state;
  }
}
