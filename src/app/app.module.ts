import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule } from 'angular-editor-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
