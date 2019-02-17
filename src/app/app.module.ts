import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTreeModule, MatIconModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { TarotComponent } from './tarot/tarot.component';
import { IndexComponent } from './index/index.component';
import { ChalkshowComponent } from './chalkshow/chalkshow.component';
import { VectorshowComponent } from './vectorshow/vectorshow.component';
import { OthershowComponent } from './othershow/othershow.component';
import { RandomshowComponent } from './randomshow/randomshow.component';
import { VulgariskisallatokComponent } from './vulgariskisallatok/vulgariskisallatok.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GalleryComponent,
    AboutmeComponent,
    ProjectsComponent,
    FavouritesComponent,
    TarotComponent,
    IndexComponent,
    ChalkshowComponent,
    VectorshowComponent,
    OthershowComponent,
    RandomshowComponent,
    VulgariskisallatokComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    AppRoutingModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule {}
