interface IState {
    auth: boolean
    AdminName: string | null
    AdminEmail: string | null
}

// interface for action reducer
interface IAction {
    type: "login" | "logout" | "changeName" | "changeEmail"
    payload: IState
}


export const authReducer = (state: IState, action: IAction) => {
    switch (action.type) {
      case "login":
        localStorage.setItem("auth", "true");
        return {
          ...state,
          auth: true,
          name: action.payload.AdminName,
          email: action.payload.AdminEmail,
        };
      case "logout":
        localStorage.removeItem("auth");
        return {
          ...state,
          auth: false,
          name: null,
          email: null,
        };
      case "changeName":
        localStorage.setItem("auth", JSON.stringify(state));
        return {
          ...state,
          name: action.payload.AdminName,
        };
      case "changeEmail":
        localStorage.setItem("auth", JSON.stringify(state));
        return {
          ...state,
          email: action.payload.AdminEmail,
        };
      default:
        return state;
    }
};