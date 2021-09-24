import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie/movie';
import { MoviePassing } from 'src/app/movie.passing';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})

export class CatalogListComponent implements OnInit {
  movies: Movie[] = [];
  isFetching = false;
  
  constructor(private http: HttpClient , private router: Router, private moviepassing: MoviePassing) {}

  ngOnInit() {
    this.loadMovies();
    console.log("called loading function");
  }

  moreDetails(movie: Movie) {
    this.moviepassing.setDetails(movie);
    this.router.navigate(['/details']);
  }

  loadMovies() {
    this.isFetching = true;
    this.http.get<any>(API_URL)
    .subscribe(
      response => {
        console.log("Response: " + response);
        this.movies = response['results'];
      }, 
    );
  }
}

const API_KEY = 'api_key=a3b6890bbca1fa8a02235bcd56b0711b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;