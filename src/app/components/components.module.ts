import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  bootstrap:[]
})
export class ComponentsModule { }
