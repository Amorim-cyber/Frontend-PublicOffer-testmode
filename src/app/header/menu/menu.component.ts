import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToList(): void{
    this.router.navigateByUrl("main/list");
  }

  goToRegister(): void{
    this.router.navigateByUrl("main/register");
  }

  goToMain(): void{
    this.router.navigateByUrl("main");
  }

}
