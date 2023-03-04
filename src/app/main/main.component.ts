import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  activeScreen: string = "login"; 

  constructor() { }

  ngOnInit(): void {
  }

  setActiveScreen(screen: string){
    this.activeScreen = screen;
  }

}
