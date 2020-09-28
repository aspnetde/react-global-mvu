export default function (state: AppState, msg: AppMsg): AppState {
  switch (msg.type) {
    case "SignIn":
      return { ...state, authenticatedUser: msg.user };
    case "SignOut":
      return { ...state, authenticatedUser: undefined };
  }
}
