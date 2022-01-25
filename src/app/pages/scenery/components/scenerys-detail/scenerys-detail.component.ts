import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneryService} from '../../services/scenery.service';
import { SceneryInterface} from '../../models/Scenery';
@Component({
  selector: 'app-scenerys-detail',
  templateUrl: './scenerys-detail.component.html',
  styleUrls: ['./scenerys-detail.component.scss']
})
export class ScenerysDetailComponent implements OnInit {
  public scenery!: SceneryInterface;
  

  constructor(private activatedRoute: ActivatedRoute, private sceneryService: SceneryService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) =>{
      const idScenery = params.get('idScenery');

      this.sceneryService.getScenery(idScenery).subscribe((data: any)=>{
        const apiResults: SceneryInterface = data;
        this.scenery = apiResults;
      }
      )
    })
  }
}
