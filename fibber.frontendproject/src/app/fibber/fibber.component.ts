import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fibber',
  templateUrl: './fibber.component.html',
  styleUrls: ['./fibber.component.css']
})
export class FibberComponent implements OnInit {

  constructor(private router: Router) { }

  goToPage(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}