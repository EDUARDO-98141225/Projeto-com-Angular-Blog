import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://www.freecodecamp.org/news/content/images/2022/03/How-to-Build-a-Weather-Application-using-React--82-.png"

  @Input()
  cardTitle : string = ""

  @Input()
  Id : string = ""



  constructor() { }

  ngOnInit(): void {
  }

}
