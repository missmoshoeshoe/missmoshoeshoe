import { Component, OnInit } from '@angular/core';
import projectCardsJson from 'src/assets/data/home-page/home-project-cards.json';

interface card {
  title: string;
  url: string;
  imgUrl: string;
  description: string;
  buttonUrl: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  cards: card[] = projectCardsJson;

  constructor() { }

  ngOnInit(): void {
  }

}
