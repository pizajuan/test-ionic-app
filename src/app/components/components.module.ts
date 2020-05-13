import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    SlidesComponent,
    StartComponent,
    LogoComponent
  ],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
