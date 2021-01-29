import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './navigation-components/main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialsModule } from './resources/modules/materials/materials.module';
import { FooterComponent } from './footer/footer.component';
import { InlineNavBarComponent } from './navigation-components/inline-nav-bar/inline-nav-bar.component';
import { MeetTheFarmComponent } from './meet-the-farm/meet-the-farm.component';
import { FarmContainerComponent } from './meet-the-farm/farm-container/farm-container.component';
import { AboutUsComponent } from './meet-the-farm/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    MeetTheFarmComponent,
    FooterComponent,
    FarmContainerComponent,
    InlineNavBarComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
