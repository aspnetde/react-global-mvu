declare interface AppState {
  authenticatedUser: string | undefined;
}

declare type AppMsg = { type: "SignIn"; user: string } | { type: "SignOut" };
