import {  ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { MovieDetailsComponent } from "./movie-details.component";
import { PosterComponent } from "../../atoms/poster/poster.component";
import { MovieLabelComponent } from "../../atoms/movie-label/movie-label.component";
import { MovieInfoComponent } from "../../atoms/movie-info/movie-info.component";

const testData = {
  title: 'Kung Fu Panda',
  year: '2008',
  id: 'tt0441773',
  poster: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
  director: 'Mark Osborne',
  casts: "Jack Black, Jackie Chen",
  genre: "Action, Comedy"
};

describe("MovieDetailsComponent", () => {

  let component: MovieDetailsComponent
  let fixture: ComponentFixture<MovieDetailsComponent> 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MovieDetailsComponent,
        PosterComponent,
        MovieLabelComponent,
        MovieInfoComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    component.selectedMovie = testData;
    fixture.detectChanges()
  })

  it("should create MovieDetailsComponent", () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("should render movie poster", () => {
    const poster = fixture.nativeElement.querySelector('.movie-details-poster');
    expect(poster).toBeTruthy();
    expect(poster.getAttribute('src')).toBe(testData.poster);
    expect(poster.getAttribute('alt')).toBe(testData.title);
  });

  it("should render movie label", () => {
    const label = fixture.nativeElement.querySelector('h3');
    expect(label).toBeTruthy();
    expect(label.textContent).toBe(`${testData.title}(${testData.year})`);
  });

  it("should render movie info", () => {
    const movieInfo = fixture.nativeElement.querySelectorAll('app-movie-info');
    expect(movieInfo).toBeTruthy();
    expect(movieInfo[0]).toBeTruthy();
    expect(movieInfo[0].textContent).toBe(`Director:  ${testData.director}`);
    expect(movieInfo[1]).toBeTruthy();
    expect(movieInfo[1].textContent).toBe(`Casts:  ${testData.casts}`);
    expect(movieInfo[2]).toBeTruthy();
    expect(movieInfo[2].textContent).toBe(`Genre:  ${testData.genre}`);
  });
});
