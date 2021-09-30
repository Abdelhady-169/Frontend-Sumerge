import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviePassing } from 'src/app/shared/services/movie.passing';
import { Movie } from '../catalog-list/movie/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedmovie!: Movie;

  constructor(private router: Router, public moviepassing: MoviePassing) { }

  goToPage(){
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.selectedmovie = this.moviepassing.getDetails();
  }

}
