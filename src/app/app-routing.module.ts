import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/ about /about.component';
const routes: Routes = [
  {path:"",component:IndexComponent},
  { path: 'about', component: AboutComponent }, // About route
  //{path:'',redirectTo:'about',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }