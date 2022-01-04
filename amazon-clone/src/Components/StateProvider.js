import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.provider>
);
export const useStateValue = () => useContext(StateContext);
