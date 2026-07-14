import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../auth.action';
// import { AuthActions } from '../action.type';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

const initialState: AuthState = {
  user: null
};

// export const reducers: ActionReducerMap<AuthState> = {
//   user: (state = initialState.user, action) => state
// };

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),
  // on(AuthActions.login, (state, {user}) => ({...state, user})),

  on(AuthActions.logout, (state, action) => {
    return {
      user: null
    }
  })
)


export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];
