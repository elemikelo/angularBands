import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { BandDetailsComponent } from '../band-details/band-details.component';
import { BandListComponent } from '../band-list/band-list.component'

const routes: Routes = [
  {
    path: "",
    component: BandListComponent,
  },

  {
    path: "foo",
    component: UnderConstructionComponent,
  },
  {
    path: "bar",
    component: UnderConstructionComponent,
  },
  {
    path: ':slug',
    component: BandDetailsComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
