import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*
import { ColorDocComponent } from '../docs/color-doc/color-doc.component';
import { TypeDocComponent } from '../docs/type-doc/type-doc.component';
import { ButtonsDocComponent } from '../docs/buttons-doc/buttons-doc.component';
import { CardsDocComponent } from '../docs/cards-doc/cards-doc.component';
import { HomeDocComponent } from '../docs/home-doc/home-doc.component';
import { ThemeTestComponent } from '../tests/theme-test/theme-test.component';
*/

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  /*
  { path: 'home-doc', component: HomeDocComponent },
  { path: 'buttons-doc', component: ButtonsDocComponent },
  { path: 'theme-test', component: ThemeTestComponent },
  { path: 'color-doc', component: ColorDocComponent },
  { path: 'typography-doc', component: TypeDocComponent },
  { path: 'cards-doc', component: CardsDocComponent }
  */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [
    //ButtonsDocComponent
  ]
})
export class AppRoutingModule { }