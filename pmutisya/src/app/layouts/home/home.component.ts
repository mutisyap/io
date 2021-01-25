import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

import projects from '../../../assets/projects.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projectList:any = projects;

  constructor(private markdownService: MarkdownService) {
   }

  ngOnInit(): void {
  }

}
