import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Moviescomponent } from './shared/components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    Moviescomponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
