import { Dispatch, createContext } from "react";

export const defaultAppState: AppState = {
  authenticatedUser: undefined,
};

export default {
  state: createContext<AppState>({} as AppState),
  dispatch: createContext<Dispatch<AppMsg>>(() => {}),
};
