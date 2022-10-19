import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string = "assets/images/abc.jpg.jpg";
  logoimg:string = "assets/images/logo11.jpg";
}
