import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  {
    "path":"",
    "title":"EKSAFAR CLUB",
    component: HomeComponent
  },
  {
    "path":"privacy",
    "title":"Privacy olicy - EKSAFAR CLUB",
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
