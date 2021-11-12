import { RouterModule, Routes } from '@angular/router'; 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { MtrousersComponent } from './mtrousers/mtrousers.component';
import { MsuitsComponent } from './msuits/msuits.component';
import { MfootwearComponent } from './mfootwear/mfootwear.component';
import { MjacketsComponent } from './mjackets/mjackets.component';
import { WeveninggownsComponent } from './weveninggowns/weveninggowns.component';
import { WfootwearComponent } from './wfootwear/wfootwear.component';
import { WjacketsComponent } from './wjackets/wjackets.component';
import { WtrousersComponent } from './wtrousers/wtrousers.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    MtrousersComponent,
    MsuitsComponent,
    MfootwearComponent,
    MjacketsComponent,
    WeveninggownsComponent,
    WfootwearComponent,
    WjacketsComponent,
    WtrousersComponent,
    MenuComponent,
    BannerComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'men',
        component: MenComponent
      },
      {
        path: 'women',
        component: WomenComponent
      },
      {
        path: 'mtrousers',
        component: MtrousersComponent
      },
      {
        path: 'msuits',
        component: MsuitsComponent
      },
      {
        path: 'mfootwear',
        component: MfootwearComponent
      },
      {
        path: 'mjackets',
        component: MjacketsComponent
      },
      {
        path: 'wtrousers',
        component: WtrousersComponent
      },
      {
        path: 'weveninggowns',
        component: WeveninggownsComponent
      },
      {
        path: 'wfootwear',
        component: WfootwearComponent
      },
      {
        path: 'wjackets',
        component: WjacketsComponent
      },
      {
        path: 'banner',
        component: BannerComponent
      },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
