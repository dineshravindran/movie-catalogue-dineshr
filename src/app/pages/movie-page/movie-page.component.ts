import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { Movie } from "../../types";
import movieListData from "../../static/movie-list.json";
import { setPageTitle } from "../../root.actions";
import { RootStore } from "../../types";

@Component({
  selector: "app-movie-page",
  templateUrl: "./movie-page.component.html",
  styleUrls: ["./movie-page.component.css"]
})
export class MoviePage {
  selectedMovie: Movie = movieListData[0];
  movieListData: Movie[] = movieListData;

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
    this.store.dispatch(setPageTitle({ value: movie.title }));
  }

  constructor(private store: Store<RootStore>) {}
}
