import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TablaComponent } from './tabla/tabla.component';
import { ServiceService} from './tabla/service.service';
import { FormsModule}  from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    SliderComponent,
    HeaderComponent,
    FormComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,FormsModule      
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
