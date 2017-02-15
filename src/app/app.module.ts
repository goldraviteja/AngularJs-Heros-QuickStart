import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CallcFormComponent } from './callc-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CallcFormComponent ],
  bootstrap:    [ AppComponent ]
})
    
export class AppModule { 
}
