import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ="https://i.ytimg.com/vi/Jyj_qIKL_f8/maxresdefault.jpg"
  contentTitle:string ='FRAMEWORK PARA APLICAÇÕES WEB'
  contentDescription: string = 'ANGULAR É UM DOS MELHORES FRAMEWORKS'


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))

    )
  }

}
