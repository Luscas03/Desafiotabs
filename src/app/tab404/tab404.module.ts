import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab404PageRoutingModule } from './tab404-routing.module';

import { Tab404Page } from './tab404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab404PageRoutingModule
  ],
  declarations: [Tab404Page]
})
export class Tab404PageModule {}
