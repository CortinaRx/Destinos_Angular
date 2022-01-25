import { Component, OnInit } from '@angular/core';
import { SceneryInterface } from './models/Scenery';
import { SceneryService } from './services/scenery.service';
@Component({
  selector: 'app-scenery',
  templateUrl: './scenery.component.html',
  styleUrls: ['./scenery.component.scss']
})
export class SceneryComponent implements OnInit {
  public scenerys: SceneryInterface[] = []

  constructor(private sceneryService: SceneryService) { }

  ngOnInit(): void {
    this.sceneryService.getAllScenerys().subscribe((data:any)=>{
      const apiResults: SceneryInterface[] = data;
      
      const formattedScenerys = apiResults.map(({id, name, country, poster})=>({
        id, name, country, poster
      }));
      this.scenerys = formattedScenerys
    })
  }

}