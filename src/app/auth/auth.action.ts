import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

const login = createAction(
  "[Login Page] User Login",
   props<{user: User}>()
)

const logout = createAction(
  "[Top menu] User Logout"
)


// // Namespace object
export const AuthActions = {
    login,
    logout
};
