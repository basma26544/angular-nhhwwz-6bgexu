import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppBootstrapModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

