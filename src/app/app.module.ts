import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordSphereComponent } from './word-sphere/word-sphere.component';

@NgModule({
  declarations: [
    AppComponent,
    WordSphereComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
