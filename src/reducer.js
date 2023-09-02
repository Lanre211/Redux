import { ADD_TASK, EDIT_TASK } from './Action';

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, id: Date.now() }],
      };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.description }
          : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
};

export default rootReducer;
