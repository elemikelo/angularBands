import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

const routes: Routes = [
  {
    path: "foo",
    component: UnderConstructionComponent,
  },
  {
    path: "bar",
    component: UnderConstructionComponent,
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
