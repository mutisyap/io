import { Component, OnInit } from '@angular/core';
import projects from '../../../assets/projects.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projectList:any = projects;

  constructor() {
   }

  ngOnInit(): void {
  }

}
