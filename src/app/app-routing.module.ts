import { NgModule } from '@angular/core';
import { GalleryComponent } from '../app/gallery/gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from '../app/aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { TarotComponent } from './tarot/tarot.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IndexComponent } from './index/index.component';
import { ChalkshowComponent } from './chalkshow/chalkshow.component';
import { VectorshowComponent } from './vectorshow/vectorshow.component';
import { OthershowComponent } from './othershow/othershow.component';
import { RandomshowComponent } from './randomshow/randomshow.component';
import { VulgariskisallatokComponent } from './vulgariskisallatok/vulgariskisallatok.component';


const routes: Routes =[
  { path: '', component: IndexComponent },
  {path: 'images', component: GalleryComponent},
  {path: 'bio', component: AboutmeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'favs', component: FavouritesComponent},
  {path: 'tarot', component: TarotComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'index', component: IndexComponent},
  {path: 'chalkshow', component: ChalkshowComponent }, 
  {path: 'vectorshow', component: VectorshowComponent },
  {path: 'othershow', component: OthershowComponent },
  {path: 'randomshow', component: RandomshowComponent },
  {path: 'vulgariskisallatok', component: VulgariskisallatokComponent}
];


@NgModule({
  exports:[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  
})
export class AppRoutingModule { }
