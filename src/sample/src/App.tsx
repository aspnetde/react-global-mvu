import React, { useReducer } from "react";

import AppContext from "./AppContext";
import Child from "./Child";
import Update from "./Update";
import { useLocalStorage } from "./LocalStorage";

function App() {
  const [persistedState, setPersistedState] = useLocalStorage(
    "State",
    {} as AppState
  );

  const updateAndPersistState = (state: AppState, msg: AppMsg) => {
    const updatedState = Update(state, msg);
    setPersistedState(updatedState);
    return updatedState;
  };

  const [state, dispatch] = useReducer(updateAndPersistState, persistedState);

  return (
    <AppContext.dispatch.Provider value={dispatch}>
      <AppContext.state.Provider value={state}>
        {state.authenticatedUser !== undefined
          ? "Signed in as: " + state.authenticatedUser
          : "Not signed in."}
        <hr />
        <Child />
      </AppContext.state.Provider>
    </AppContext.dispatch.Provider>
  );
}

export default App;
