import { createSlice } from "@reduxjs/toolkit";

// Key Concepts in Redux:

// Store: The store is the central hub of Redux that holds the complete application state. It is a JavaScript object that manages the state tree and provides methods for state manipulation.

// Actions: Actions are plain JavaScript objects that represent an intention to change the state. They contain a type field that describes the type of action and additional payload data. Actions are dispatched to the Redux store to trigger state changes.

// Reducers: Reducers are pure functions that define how the application state should change in response to actions. They take the current state and an action as input and return a new state object. Reducers are responsible for updating specific parts of the state tree based on the action type.

// Dispatch: Dispatch is a method provided by the Redux store that sends actions to the store. When an action is dispatched, it triggers the execution of the corresponding reducer(s), which updates the state accordingly.

// Redux Slices:

// Redux Toolkit introduced the concept of "slices," which is a way to organize the Redux store and reducer logic into smaller, modular units. A slice represents a portion of the overall Redux state and consists of a reducer and actions related to that specific slice of state.

// By using slices, you can define independent parts of the state tree with their own reducer functions, actions, and selectors. This modular approach makes it easier to manage and scale complex applications with a large state.

// initialState refers to the initial state value that is set when creating a Redux reducer.

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setConnections: (state, action) => {
      if (state.user) {
        state.user.connections = action.payload.connections;
      } else {
        console.error("Not logged in.");
      }
    },
  },
});

export const { setLogin, setLogout, setConnections } = authSlice.actions;
export default authSlice.reducer;
