import { SceneryComponent } from './scenery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenerysDetailComponent } from './components/scenerys-detail/scenerys-detail.component';


const routes: Routes = [
  {path: "", component: SceneryComponent},
  {path: ":idScenery", component: ScenerysDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SceneryRoutingModule { }
