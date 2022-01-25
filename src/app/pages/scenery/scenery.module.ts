import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SceneryRoutingModule } from './scenery-routing.module';
import { SceneryComponent } from './scenery.component';
import { ScenerysDetailComponent } from './components/scenerys-detail/scenerys-detail.component';


@NgModule({
  declarations: [
    SceneryComponent,
    ScenerysDetailComponent
  ],
  imports: [
    CommonModule,
    SceneryRoutingModule,
    HttpClientModule
  ]
})
export class SceneryModule { }
