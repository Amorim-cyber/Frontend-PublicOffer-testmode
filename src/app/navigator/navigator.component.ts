import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegateTo(type:string): void {
    if(type==="C")
    this.router.navigateByUrl("Back");
    else
    this.router.navigateByUrl("Back/"+type);
  }

}
