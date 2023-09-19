import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { setPageTitle } from "./root.actions";
import { PageTitle } from "./types";

type State = {
  // Somehow there's an issue
  // when we declare pageTitle as primitive string
  // or as String object
  // Therefore, the value is wrapped under an object
  // as temporary solution
  pageTitle: PageTitle;
}

export const initialState: State = {
  pageTitle: { value: "🎥 Movie Catalogue" }
};


const _rootReducer = createReducer(
  initialState,
  on(setPageTitle, (state: State, pageTitle: PageTitle) => {
    return {
      ...state,
      pageTitle
    };
  })
);

export const rootReducer: ActionReducer<State, Action> = (state: State | undefined, action: Action) =>
  _rootReducer(state, action);
