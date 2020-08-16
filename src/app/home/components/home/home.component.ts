import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mySwipper: Swiper;

  constructor() { }

  ngOnInit(): void{}

  ngAfterViewInit(): void {
    this.mySwipper = new Swiper('.swiper-container');
  }

}
