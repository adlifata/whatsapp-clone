import React, { createContext, useContext, useReducer } from "react";

//preparing data layout where the data lives
export const StateContext = createContext();

// higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//
export const useStateValue = () => useContext(StateContext);