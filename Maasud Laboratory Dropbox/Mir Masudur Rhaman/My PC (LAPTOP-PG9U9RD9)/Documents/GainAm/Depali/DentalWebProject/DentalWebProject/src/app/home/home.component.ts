import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string = "assets/images/istockphoto-1.jpg";
  myimage1:string = "assets/images/7afffa.png";
  icon1:string = "assets/images/flaticon2.png";
  icon2:string = "assets/images/flaticon3.png";
  icon3:string = "assets/images/flaticon4.png";
  icon4:string = "assets/images/orthodontics-png.png";
}
