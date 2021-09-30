import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  loadedData: MovieComponent[] = [];
  isFetching = false;
  detailedObj!: MovieComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchData(){
    return this.http.get<any>(API_URL, {
      params: new HttpParams().set('api_key', API_KEY)
    });
  }

  getDatail(){
    return this.detailedObj;
  }

  setDetail(movie: MovieComponent){
    this.detailedObj = movie;
  }
}

const API_KEY = 'api_key=a3b6890bbca1fa8a02235bcd56b0711b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;