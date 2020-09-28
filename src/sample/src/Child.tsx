import React, { Dispatch, useContext } from "react";

import AppContext from "./AppContext";

interface ButtonProps {
  dispatch: Dispatch<AppMsg>;
}

const SignIn = (props: ButtonProps) => (
  <button onClick={() => props.dispatch({ type: "SignIn", user: "Foo" })}>
    Sign in
  </button>
);
const SignOut = (props: ButtonProps) => (
  <button onClick={() => props.dispatch({ type: "SignOut" })}>Sign out</button>
);

export default function () {
  const state = useContext(AppContext.state);
  const dispatch = useContext(AppContext.dispatch);

  return (
    <div>
      {state.authenticatedUser ? (
        <SignOut dispatch={dispatch} />
      ) : (
        <SignIn dispatch={dispatch} />
      )}
    </div>
  );
}
