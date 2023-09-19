import { createAction, props } from "@ngrx/store";
import { PageTitle } from "./types";

export const setPageTitle = createAction(
  "[App] Set Page Title",
  props<PageTitle>()
);
