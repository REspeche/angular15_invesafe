import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  loadList = false;
  lstProjects = [];

  constructor () { }

  ngOnInit () {
    this.loadList = true;
  }

  showPreviousProperties () {
    alert(1);
  }
}
