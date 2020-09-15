import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab404Page } from './tab404.page';

const routes: Routes = [
  {
    path: '',
    component: Tab404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab404PageRoutingModule {}
